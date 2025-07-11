#define _CRT_SECURE_NO_WARNINGS
#include <openssl/applink.c>
#include <openssl/pem.h>
#include <openssl/rsa.h>
#include <openssl/evp.h>
#include <openssl/rand.h>
#include <fstream>
#include <vector>
#include <iostream>
#include <string>
#include <filesystem>

using namespace std;
// 加载公钥
bool LoadPublicKey(const string& path, EVP_PKEY** key) {
    FILE* file = fopen(path.c_str(), "rb");
    if (!file) return false;
    *key = PEM_read_PUBKEY(file, nullptr, nullptr, nullptr); // 从 PEM 文件读取公钥
    fclose(file);
    return *key != nullptr;
}

// 加载私钥
bool LoadPrivateKey(const string& path, EVP_PKEY** key) {
    FILE* file = fopen(path.c_str(), "rb");
    if (!file) return false;
    *key = PEM_read_PrivateKey(file, nullptr, nullptr, nullptr); // 从 PEM 文件读取私钥
    fclose(file);
    return *key != nullptr;
}

// 使用 RSA 公钥加密数据（如 AES 密钥）
bool RSAEncrypt(EVP_PKEY* pubKey, const vector<unsigned char>& data, vector<unsigned char>& encrypted) {
    EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new(pubKey, nullptr);
    if (!ctx) return false;
    EVP_PKEY_encrypt_init(ctx);
    size_t outlen = 0;
    EVP_PKEY_encrypt(ctx, nullptr, &outlen, data.data(), data.size()); // 获取加密后长度
    encrypted.resize(outlen);
    if (EVP_PKEY_encrypt(ctx, encrypted.data(), &outlen, data.data(), data.size()) <= 0) {
        EVP_PKEY_CTX_free(ctx);
        return false;
    }
    encrypted.resize(outlen);
    EVP_PKEY_CTX_free(ctx);
    return true;
}

// 使用 RSA 私钥解密数据（解密 AES 密钥）
bool RSADecrypt(EVP_PKEY* privKey, const vector<unsigned char>& encrypted, vector<unsigned char>& data) {
    EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new(privKey, nullptr);
    if (!ctx) return false;
    EVP_PKEY_decrypt_init(ctx);
    size_t outlen = 0;
    EVP_PKEY_decrypt(ctx, nullptr, &outlen, encrypted.data(), encrypted.size()); // 获取解密后长度
    data.resize(outlen);
    if (EVP_PKEY_decrypt(ctx, data.data(), &outlen, encrypted.data(), encrypted.size()) <= 0) {
        EVP_PKEY_CTX_free(ctx);
        return false;
    }
    data.resize(outlen);
    EVP_PKEY_CTX_free(ctx);
    return true;
}

// AES 加密函数（使用 CBC 模式）
bool AESEncrypt(const vector<unsigned char>& plaintext, const vector<unsigned char>& key,
    vector<unsigned char>& ciphertext, vector<unsigned char>& iv) {
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    iv.resize(16);                          // 生成 16 字节的 IV
    RAND_bytes(iv.data(), iv.size());       // 生成随机 IV
    EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key.data(), iv.data());

    ciphertext.resize(plaintext.size() + 16); // 分配缓冲区
    int len1 = 0, len2 = 0;
    EVP_EncryptUpdate(ctx, ciphertext.data(), &len1, plaintext.data(), plaintext.size());
    EVP_EncryptFinal_ex(ctx, ciphertext.data() + len1, &len2);
    ciphertext.resize(len1 + len2);
    EVP_CIPHER_CTX_free(ctx);
    return true;
}

// AES 解密函数（使用 CBC 模式）
bool AESDecrypt(const vector<unsigned char>& ciphertext, const vector<unsigned char>& key,
    const vector<unsigned char>& iv, vector<unsigned char>& plaintext) {
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key.data(), iv.data());

    plaintext.resize(ciphertext.size());
    int len1 = 0, len2 = 0;
    EVP_DecryptUpdate(ctx, plaintext.data(), &len1, ciphertext.data(), ciphertext.size());
    EVP_DecryptFinal_ex(ctx, plaintext.data() + len1, &len2);
    plaintext.resize(len1 + len2);
    EVP_CIPHER_CTX_free(ctx);
    return true;
}

// 生成 RSA 密钥对并写入 PEM 文件
bool GenerateRSAKeyPair(const string& pubPath, const string& privPath) {
    EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new_id(EVP_PKEY_RSA, nullptr);
    if (!ctx) return false;
    if (EVP_PKEY_keygen_init(ctx) <= 0) return false;
    if (EVP_PKEY_CTX_set_rsa_keygen_bits(ctx, 2048) <= 0) return false;

    EVP_PKEY* pkey = nullptr;
    if (EVP_PKEY_keygen(ctx, &pkey) <= 0) return false;

    FILE* privFile = fopen(privPath.c_str(), "wb");
    if (!privFile) return false;
    PEM_write_PrivateKey(privFile, pkey, nullptr, nullptr, 0, nullptr, nullptr);
    fclose(privFile);

    FILE* pubFile = fopen(pubPath.c_str(), "wb");
    if (!pubFile) return false;
    PEM_write_PUBKEY(pubFile, pkey);
    fclose(pubFile);

    EVP_PKEY_free(pkey);
    EVP_PKEY_CTX_free(ctx);
    return true;
}

// 加密文件（混合加密：AES 加密内容，RSA 加密 AES 密钥）
bool EncryptFile(const string& inFile, const string& outFile, const string& pubKeyPath) {
    ifstream in(inFile, ios::binary);
    vector<unsigned char> plain((istreambuf_iterator<char>(in)), {});
    in.close();

    vector<unsigned char> aesKey(32);        // 256-bit AES 密钥
    RAND_bytes(aesKey.data(), aesKey.size());

    EVP_PKEY* pubKey = nullptr;
    if (!LoadPublicKey(pubKeyPath, &pubKey)) return false;
    vector<unsigned char> encAESKey;
    if (!RSAEncrypt(pubKey, aesKey, encAESKey)) return false;
    EVP_PKEY_free(pubKey);

    vector<unsigned char> ciphertext, iv;
    AESEncrypt(plain, aesKey, ciphertext, iv);

    ofstream out(outFile, ios::binary);
    uint32_t klen = encAESKey.size(), ivlen = iv.size();
    out.write((char*)&klen, 4);
    out.write((char*)encAESKey.data(), klen);
    out.write((char*)&ivlen, 4);
    out.write((char*)iv.data(), ivlen);
    out.write((char*)ciphertext.data(), ciphertext.size());
    out.close();
    return true;
}

// 解密文件（RSA 解密 AES 密钥，再 AES 解密文件）
bool DecryptFile(const string& inFile, const string& outFile, const string& privKeyPath) {
    ifstream in(inFile, ios::binary);
    uint32_t klen, ivlen;
    in.read((char*)&klen, 4);
    vector<unsigned char> encAESKey(klen);
    in.read((char*)encAESKey.data(), klen);
    in.read((char*)&ivlen, 4);
    vector<unsigned char> iv(ivlen);
    in.read((char*)iv.data(), ivlen);
    vector<unsigned char> ciphertext((istreambuf_iterator<char>(in)), {});
    in.close();

    EVP_PKEY* privKey = nullptr;
    if (!LoadPrivateKey(privKeyPath, &privKey)) return false;
    vector<unsigned char> aesKey;
    if (!RSADecrypt(privKey, encAESKey, aesKey)) return false;
    EVP_PKEY_free(privKey);

    vector<unsigned char> plain;
    AESDecrypt(ciphertext, aesKey, iv, plain);

    ofstream out(outFile, ios::binary);
    out.write((char*)plain.data(), plain.size());
    out.close();
    return true;
}

// 主函数：生成密钥对、加密文件、解密文件
int main() {
    OpenSSL_add_all_algorithms(); // 初始化 OpenSSL 算法
    string pubkey = "public.pem";
    string privkey = "private.pem";

    if (GenerateRSAKeyPair(pubkey, privkey))
        cout << "密钥生成成功！\n";

    string path = "C:/Users/MasterRin/Desktop/";
    string source = path + "test.mp3";
    string encrypted = path + "test_enc.mp3";
    string decrypted = path + "test_dec.mp3";

    if (EncryptFile(source, encrypted, pubkey))
    {
        cout << source << "->"<< encrypted << endl;
        cout << "加密成功！\n";
    }
    else
        cout << "加密失败！\n";

    if (DecryptFile(encrypted, decrypted, privkey))
    {
        cout << encrypted << "->" << decrypted << endl;
        cout << "解密成功！\n";
    }
    else
        cout << "解密失败！\n";

    return 0;
}
