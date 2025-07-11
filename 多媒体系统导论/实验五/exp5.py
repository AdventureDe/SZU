import os
import cv2
import numpy as np
import time
from sklearn.metrics import average_precision_score
from tensorflow.keras.applications import VGG16
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input
from sklearn.metrics.pairwise import cosine_similarity

# 设定数据集路径
dataset_path = 'C:/Users/MasterRin/Desktop/jpg'

# 读取数据集
def load_images(dataset_path):
    images = []
    labels = []
    for filename in os.listdir(dataset_path):
        if filename.endswith(".jpg"):
            img = cv2.imread(os.path.join(dataset_path, filename))
            img = cv2.resize(img, (224, 224))  # 统一大小
            images.append(img)
            labels.append(int(filename[1:4]))  # 获取组号作为标签
    return np.array(images), np.array(labels)


def extract_features(images):
    # 加载VGG16模型，不包括顶层全连接层
    model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
    features = []
    for img in images:
        img = image.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = preprocess_input(img)  # 对图像进行预处理
        feature = model.predict(img)  # 提取特征
        features.append(feature.flatten())  # 展平为1D向量
    return np.array(features)


# def calculate_similarity(features):
#     return cosine_similarity(features)


def retrieve_top_k_images(query_image_idx, features, labels, k=3):
    similarities = cosine_similarity([features[query_image_idx]], features)  # 查询与所有图像的相似度
    sorted_indices = np.argsort(similarities[0])[::-1]  # 按相似度降序排列
    return sorted_indices[:k]


def calculate_map_per_query(features, labels, k=3):
    # 计算每个查询图像的平均精度
    average_precisions = []
    for i in range(len(features)):
        # 对每个图像进行检索
        retrieved_indices = retrieve_top_k_images(i, features, labels, k)
        # 获取真实标签
        relevant = (labels[retrieved_indices] == labels[i]).astype(int)  # 相关的标签是相同的组号
        # 计算当前查询的AP
        average_precision = average_precision_score(relevant, cosine_similarity([features[i]],
                                                        features[retrieved_indices]).flatten())
        average_precisions.append(average_precision)
    return np.mean(average_precisions)


def calculate_map_overall(features, labels, k=3):
    # 计算所有查询图像的检索结果级mAP
    all_relevant = []
    all_scores = []
    for i in range(len(features)):
        retrieved_indices = retrieve_top_k_images(i, features, labels, k)
        relevant = (labels[retrieved_indices] == labels[i]).astype(int)  # 相关的标签
        scores = cosine_similarity([features[i]], features[retrieved_indices]).flatten()

        all_relevant.extend(relevant)
        all_scores.extend(scores)
    return average_precision_score(all_relevant, all_scores)


def main():
    # 加载数据集
    images, labels = load_images(dataset_path)

    # 提取图像特征
    features = extract_features(images)

    # 计算检索结果级 mAP 和查询级 mAP
    start_time = time.time()

    map_overall = calculate_map_overall(features, labels)

    # 输出 mAP
    print(f'Mean Average Precision (mAP) overall: {map_overall:.4f}')

    # 输入查询图像，检索前3个相似的结果
    query_image_idx = int(input("Enter the query image index: "))
    top_k_indices = retrieve_top_k_images(query_image_idx, features, labels, k=3)

    print("Top 3 similar images:")
    for idx in top_k_indices:
        print(f"Image {idx} with label {labels[idx]}")

    map_per_query = calculate_map_per_query(features, labels)
    end_time = time.time()

    total_time = end_time - start_time

    print(f'Mean Average Precision (mAP) per query: {map_per_query:.4f}')
    print(f"Total Time for Calculating mAP: {total_time:.2f} seconds")
if __name__ == "__main__":
    main()
