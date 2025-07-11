#include "Angel.h"
#include "TriMesh.h"
#include "Camera.h"
#include "MeshPainter.h"

#include <vector>
#include <string>
#include <algorithm>
#include <assert.h>

int WIDTH = 600;
int HEIGHT = 600;

int mainWindow;

// ------------------------ 管理模型变换矩阵 ------------------------
class MatrixStack {
	int		_index;
	int		_size;
	glm::mat4* _matrices;

public:
	MatrixStack(int numMatrices = 100) :_index(0), _size(numMatrices)
	{
		_matrices = new glm::mat4[numMatrices];
	}

	~MatrixStack()
	{
		delete[]_matrices;
	}

	void push(const glm::mat4& m) {
		assert(_index + 1 < _size);
		_matrices[_index++] = m;
	}

	glm::mat4& pop() {
		assert(_index - 1 >= 0);
		_index--;
		return _matrices[_index];
	}
};

// ------------------------ 定义颜色变量 ------------------------
#define White	glm::vec3(1.0, 1.0, 1.0)
#define Yellow	glm::vec3(1.0, 1.0, 0.0)
#define Green	glm::vec3(0.0, 1.0, 0.0)
#define Cyan	glm::vec3(0.0, 1.0, 1.0)
#define Magenta	glm::vec3(1.0, 0.0, 1.0)
#define Red		glm::vec3(1.0, 0.0, 0.0)
#define Black	glm::vec3(0.0, 0.0, 0.0)
#define Blue	glm::vec3(0.0, 0.0, 1.0)
#define Brown	glm::vec3(0.5, 0.5, 0.5)
#define Purple  glm::vec3(0.5, 0.0, 0.5)
#define sky     glm::vec3(0.4, 0.77, 1.0)


// ------------------------ 定义机器人的不同组件 ------------------------
struct Robot
{
	// 关节大小
	float TORSO_HEIGHT = 0.4;
	float TORSO_WIDTH = 0.25;
	float UPPER_ARM_HEIGHT = 0.25;
	float LOWER_ARM_HEIGHT = 0.18;
	float UPPER_ARM_WIDTH = 0.08;
	float LOWER_ARM_WIDTH = 0.05;
	float UPPER_LEG_HEIGHT = 0.28;
	float LOWER_LEG_HEIGHT = 0.22;
	float UPPER_LEG_WIDTH = 0.1;
	float LOWER_LEG_WIDTH = 0.05;
	float HEAD_HEIGHT = 0.18;
	float HEAD_WIDTH = 0.15;

	// 关节角和菜单选项值
	enum {
		Torso,			// 躯干
		Head,			// 头部
		RightUpperArm,	// 右大臂
		RightLowerArm,	// 右小臂
		LeftUpperArm,	// 左大臂
		LeftLowerArm,	// 左小臂
		RightUpperLeg,	// 右大腿
		RightLowerLeg,	// 右小腿
		LeftUpperLeg,	// 左大腿
		LeftLowerLeg,	// 左小腿
		RightShoeObject, //左边鞋子
		LeftShoeObject,  //右边鞋子
	};

	// 关节角大小
	GLfloat theta[12] = {
		0.0,    // Torso
		0.0,    // Head
		0.0,    // RightUpperArm
		0.0,    // RightLowerArm
		0.0,    // LeftUpperArm
		0.0,    // LeftLowerArm
		0.0,    // RightUpperLeg
		0.0,    // RightLowerLeg
		0.0,    // LeftUpperLeg
		0.0,     // LeftLowerLeg
		0.0,	//RightShoeObject
		0.0		//LeftShoeObject
	};
};
Robot robot;

// 被选中的物体
int Selected_mesh = robot.Torso;

/* ------------------------初始化数据------------------------ */
TriMesh* Torso = new TriMesh();
TriMesh* Head = new TriMesh();
TriMesh* RightUpperArm = new TriMesh();
TriMesh* RightLowerArm = new TriMesh();
TriMesh* LeftUpperArm = new TriMesh();
TriMesh* LeftLowerArm = new TriMesh();
TriMesh* RightUpperLeg = new TriMesh();
TriMesh* RightLowerLeg = new TriMesh();
TriMesh* LeftUpperLeg = new TriMesh();
TriMesh* LeftLowerLeg = new TriMesh();
TriMesh* RightShoe = new TriMesh();
TriMesh* LeftShoe = new TriMesh();

openGLObject TorsoObject;
openGLObject HeadObject;
openGLObject RightUpperArmObject;
openGLObject RightLowerArmObject;
openGLObject LeftUpperArmObject;
openGLObject LeftLowerArmObject;
openGLObject RightUpperLegObject;
openGLObject RightLowerLegObject;
openGLObject LeftUpperLegObject;
openGLObject LeftLowerLegObject;
openGLObject RightShoeObject;
openGLObject LeftShoeObject;

openGLObject mesh_object;
openGLObject plane_object;

TriMesh* table = new TriMesh();
TriMesh* wawa = new TriMesh();
TriMesh* plane = new TriMesh();
TriMesh* mesh = new TriMesh();

Camera* camera = new Camera();
Light* light = new Light();
MeshPainter* painter = new MeshPainter();
MeshPainter* plane_painter = new MeshPainter();

glm::vec3 light_position;

float move_step_size = 0.2;

// 获取生成的所有模型，用于结束程序时释放内存
std::vector<TriMesh*> meshList;

/* ------------------------ 绑定光照和材质 ------------------------ */
void bindLightAndMaterial(TriMesh* mesh, openGLObject& object, Light* light, Camera* camera) {

	// 传递当前相机的位置
	glUniform3fv(glGetUniformLocation(object.program, "eye_position"), 1, &camera->eye[0]);

	// 传递物体的材质
	glm::vec4 meshAmbient = mesh->getAmbient();
	glm::vec4 meshDiffuse = mesh->getDiffuse();
	glm::vec4 meshSpecular = mesh->getSpecular();
	float meshShininess = mesh->getShininess();
	glUniform4fv(glGetUniformLocation(object.program, "material.ambient"), 1, &meshAmbient[0]);
	glUniform4fv(glGetUniformLocation(object.program, "material.diffuse"), 1, &meshDiffuse[0]);
	glUniform4fv(glGetUniformLocation(object.program, "material.specular"), 1, &meshSpecular[0]);
	glUniform1f(glGetUniformLocation(object.program, "material.shininess"), meshShininess);

	// 传递光源信息
	glm::vec4 lightAmbient = light->getAmbient();
	glm::vec4 lightDiffuse = light->getDiffuse();
	glm::vec4 lightSpecular = light->getSpecular();
	glm::vec3 lightPosition = light->getTranslation();
	glUniform4fv(glGetUniformLocation(object.program, "light.ambient"), 1, &lightAmbient[0]);
	glUniform4fv(glGetUniformLocation(object.program, "light.diffuse"), 1, &lightDiffuse[0]);
	glUniform4fv(glGetUniformLocation(object.program, "light.specular"), 1, &lightSpecular[0]);
	glUniform3fv(glGetUniformLocation(object.program, "light.position"), 1, &lightPosition[0]);
}

/* ------------------------ 绘制物体与阴影 ------------------------ */
void drawMesh(glm::mat4 modelMatrix, TriMesh* mesh, openGLObject object) {
	glBindVertexArray(object.vao);
	glUseProgram(object.program);

	// 父节点矩阵 * 本节点局部变换矩阵
	glUniformMatrix4fv(object.modelLocation, 1, GL_FALSE, &modelMatrix[0][0]);
	glUniformMatrix4fv(object.viewLocation, 1, GL_TRUE, &camera->viewMatrix[0][0]);
	glUniformMatrix4fv(object.projectionLocation, 1, GL_TRUE, &camera->projMatrix[0][0]);
	glUniform1i(object.shadowLocation, 0);
	bindLightAndMaterial(mesh, object, light, camera);
	// 绘制
	glDrawArrays(GL_TRIANGLES, 0, mesh->getPoints().size());

	// 根据光源位置，计算阴影投影矩阵
	light_position = light->getTranslation();
	float lx = light_position[0];
	float ly = light_position[1];
	float lz = light_position[2];
	glm::mat4 shadowProjMatrix(
		-ly, 0.0, 0.0, 0.0,
		lx, 0.0, lz, 1.0,
		0.0, 0.0, -ly, 0.0,
		0.0, 0.0, 0.0, -ly);
	// 计算阴影的模型变换矩阵。
	modelMatrix = shadowProjMatrix * modelMatrix;
	// 传递 isShadow 变量
	glUniform1i(object.shadowLocation, 1);
	// 传递 unifrom 关键字的矩阵数据。
	glUniformMatrix4fv(object.modelLocation, 1, GL_FALSE, &modelMatrix[0][0]);
	// 绘制
	glDrawArrays(GL_TRIANGLES, 0, mesh->getPoints().size());
}

/* ------------------------定义画机器人的不同函数------------------------ */
// 躯体
void torso(glm::mat4 modelMatrix)
{
	// 本节点局部变换矩阵
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, 0.5 * robot.TORSO_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.TORSO_WIDTH, robot.TORSO_HEIGHT, robot.TORSO_WIDTH));

	// 乘以来自父物体的模型变换矩阵，绘制当前物体
	drawMesh(modelMatrix * instance, Torso, TorsoObject);
}

// 头部
void head(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, 0.5 * robot.HEAD_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.HEAD_WIDTH, robot.HEAD_HEIGHT, robot.HEAD_WIDTH));

	drawMesh(modelMatrix * instance, Head, HeadObject);
}

// 左大臂
void left_upper_arm(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.UPPER_ARM_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.UPPER_ARM_WIDTH, robot.UPPER_ARM_HEIGHT, robot.UPPER_ARM_WIDTH));

	drawMesh(modelMatrix * instance, LeftUpperArm, LeftUpperArmObject);
}

// 左小臂
void left_lower_arm(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.LOWER_ARM_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.LOWER_ARM_WIDTH, robot.LOWER_ARM_HEIGHT, robot.LOWER_ARM_WIDTH));

	drawMesh(modelMatrix * instance, LeftLowerArm, LeftLowerArmObject);
}

// 右大臂
void right_upper_arm(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.UPPER_ARM_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.UPPER_ARM_WIDTH, robot.UPPER_ARM_HEIGHT, robot.UPPER_ARM_WIDTH));

	drawMesh(modelMatrix * instance, RightUpperArm, RightUpperArmObject);
}

// 右小臂
void right_lower_arm(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.LOWER_ARM_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.LOWER_ARM_WIDTH, robot.LOWER_ARM_HEIGHT, robot.LOWER_ARM_WIDTH));

	drawMesh(modelMatrix * instance, RightLowerArm, RightLowerArmObject);
}

// 左大腿
void left_upper_leg(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.UPPER_LEG_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.UPPER_LEG_WIDTH, robot.UPPER_LEG_HEIGHT, robot.UPPER_LEG_WIDTH));

	drawMesh(modelMatrix * instance, LeftUpperLeg, LeftUpperLegObject);
}

// 左小腿
void left_lower_leg(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.LOWER_LEG_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.LOWER_LEG_WIDTH, robot.LOWER_LEG_HEIGHT, robot.LOWER_LEG_WIDTH));

	drawMesh(modelMatrix * instance, LeftLowerLeg, LeftLowerLegObject);
}

// 左脚
void left_foot_shoe(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, 0.04, 0.04));
	instance = glm::scale(instance, glm::vec3(0.1, 0.05, 0.2));

	drawMesh(modelMatrix * instance, LeftShoe, LeftShoeObject);
}
// 右大腿
void right_upper_leg(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.UPPER_LEG_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.UPPER_LEG_WIDTH, robot.UPPER_LEG_HEIGHT, robot.UPPER_LEG_WIDTH));

	drawMesh(modelMatrix * instance, RightUpperLeg, RightUpperLegObject);
}

// 右小腿
void right_lower_leg(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, -0.5 * robot.LOWER_LEG_HEIGHT, 0.0));
	instance = glm::scale(instance, glm::vec3(robot.LOWER_LEG_WIDTH, robot.LOWER_LEG_HEIGHT, robot.LOWER_LEG_WIDTH));

	drawMesh(modelMatrix * instance, RightLowerLeg, RightLowerLegObject);
}

// 右脚
void right_foot_shoe(glm::mat4 modelMatrix)
{
	glm::mat4 instance = glm::mat4(1.0);
	instance = glm::translate(instance, glm::vec3(0.0, 0.04, 0.04));
	instance = glm::scale(instance, glm::vec3(0.1, 0.05, 0.2));

	drawMesh(modelMatrix * instance, RightShoe, RightShoeObject);
}

/* ------------------------ 绑定数据，将TriMesh的顶点数据、颜色、法向量等绑定到OpenGL对象中 ------------------------ */
void bindObjectAndData(TriMesh* mesh, openGLObject& object, const std::string& vshader, const std::string& fshader)
{
	// 生成并绑定一个顶点数组对象，用于存储对象的所有顶点数据
	glGenVertexArrays(1, &object.vao);
	glBindVertexArray(object.vao);

	// 创建并绑定一个顶点缓冲对象，用于存储顶点数据（包括位置、颜色、法线等）。
	glGenBuffers(1, &object.vbo);
	glBindBuffer(GL_ARRAY_BUFFER, object.vbo);
	glBufferData(GL_ARRAY_BUFFER,
		(mesh->getPoints().size() + mesh->getColors().size() + mesh->getNormals().size()) * sizeof(glm::vec3),
		NULL,
		GL_STATIC_DRAW);

	// 将数据分别上传到VBO的不同区域
	glBufferSubData(GL_ARRAY_BUFFER, 0, mesh->getPoints().size() * sizeof(glm::vec3), &mesh->getPoints()[0]);
	glBufferSubData(GL_ARRAY_BUFFER, mesh->getPoints().size() * sizeof(glm::vec3), mesh->getColors().size() * sizeof(glm::vec3), &mesh->getColors()[0]);
	glBufferSubData(GL_ARRAY_BUFFER, (mesh->getPoints().size() + mesh->getColors().size()) * sizeof(glm::vec3), mesh->getNormals().size() * sizeof(glm::vec3), &mesh->getNormals()[0]);

	// 加载顶点着色器和片段着色器
	object.vshader = vshader;
	object.fshader = fshader;
	object.program = InitShader(object.vshader.c_str(), object.fshader.c_str());

	// 从顶点着色器中初始化顶点的坐标
	object.pLocation = glGetAttribLocation(object.program, "vPosition");
	glEnableVertexAttribArray(object.pLocation);
	glVertexAttribPointer(object.pLocation, 3, GL_FLOAT, GL_FALSE, 0, BUFFER_OFFSET(0));

	// 从顶点着色器中初始化顶点的颜色
	object.cLocation = glGetAttribLocation(object.program, "vColor");
	glEnableVertexAttribArray(object.cLocation);
	glVertexAttribPointer(object.cLocation, 3, GL_FLOAT, GL_FALSE, 0, BUFFER_OFFSET(mesh->getPoints().size() * sizeof(glm::vec3)));

	// 从顶点着色器中初始化顶点的法向量
	object.nLocation = glGetAttribLocation(object.program, "vNormal");
	glEnableVertexAttribArray(object.nLocation);
	glVertexAttribPointer(object.nLocation, 3,
		GL_FLOAT, GL_FALSE, 0,
		BUFFER_OFFSET((mesh->getPoints().size() + mesh->getColors().size()) * sizeof(glm::vec3)));

	// 获得矩阵位置
	object.modelLocation = glGetUniformLocation(object.program, "model");
	object.viewLocation = glGetUniformLocation(object.program, "view");
	object.projectionLocation = glGetUniformLocation(object.program, "projection");
	object.shadowLocation = glGetUniformLocation(object.program, "isShadow");
}

/* ------------------------ 初始化OFF模型的输入 ------------------------ */
void mesh_init() {
	std::string vshader, fshader;
	// 读取着色器并使用
	vshader = "shaders/vshader.glsl";
	fshader = "shaders/fshader.glsl";
	// 设置物体的旋转位移
	mesh->setTranslation(glm::vec3(0.9, 0.34, 0.0));
	mesh->setRotation(glm::vec3(0.0, 90.0, 0.0));
	mesh->setScale(glm::vec3(1.0, 1.0, 1.0));
	// 设置材质
	mesh->setAmbient(glm::vec4(0.2, 0.2, 0.2, 1.0)); // 环境光
	mesh->setDiffuse(glm::vec4(0.7, 0.7, 0.7, 1.0)); // 漫反射
	mesh->setSpecular(glm::vec4(0.2, 0.2, 0.2, 1.0)); // 镜面反射
	mesh->setShininess(1.0); //高光系数
	// 将物体的顶点数据传递
	bindObjectAndData(mesh, mesh_object, vshader, fshader);
}

/* ------------------------ 初始化整个场景 ------------------------ */
void init()
{
	// 设置光照
	light->setTranslation(glm::vec3(-5.0, 15.0, 10.0)); // 设置光源位置
	light->setAmbient(glm::vec4(1.0, 1.0, 1.0, 1.0)); // 环境光
	light->setDiffuse(glm::vec4(1.0, 1.0, 1.0, 1.0)); // 漫反射
	light->setSpecular(glm::vec4(1.0, 1.0, 1.0, 1.0)); // 镜面反射
	light->setAttenuation(1.0, 0.045, 0.0075); // 衰减系数

	// 读取着色器并使用
	std::string vshader, fshader;
	vshader = "shaders/vshader.glsl";
	fshader = "shaders/fshader.glsl";
	// 读取桌子模型
	table->setNormalize(true);
	table->readObj("./assets/table.obj");
	// 设置物体的旋转位移
	table->setTranslation(glm::vec3(-0.85, 0.23, 0.0));
	table->setRotation(glm::vec3(-90.0, 0.0, 0.0));
	table->setScale(glm::vec3(1.0, 1.0, 1.0));
	// 设置材质
	table->setAmbient(glm::vec4(0.30f, 0.30f, 0.30f, 1.0f)); // 环境光
	table->setDiffuse(glm::vec4(0.800f, 0.600f, 0.400f, 1.0f)); // 漫反射
	table->setSpecular(glm::vec4(0.200f, 0.200f, 0.200f, 1.0f)); // 镜面反射
	table->setShininess(10.0f); // 高光系数
	// 加到painter中
	painter->addMesh(table, "mesh_a", "./assets/table.png", vshader, fshader); 	// 指定纹理与着色器
	// 创建的加入一个容器内，程序结束时将这些数据释放
	meshList.push_back(table);

	// 读取wawa模型
	wawa->setNormalize(true);
	wawa->readObj("./assets/wawa.obj");
	// 设置物体的旋转位移
	wawa->setTranslation(glm::vec3(0.0, 0.40, -0.85));
	wawa->setRotation(glm::vec3(-90.0, 180.0, 0.0));
	wawa->setScale(glm::vec3(1.0, 1.0, 1.0));
	// 设置材质
	wawa->setAmbient(glm::vec4(0.30f, 0.30f, 0.30f, 1.0f)); // 环境光
	wawa->setDiffuse(glm::vec4(1.000f, 1.000f, 1.000f, 1.0f)); // 漫反射
	wawa->setSpecular(glm::vec4(0.900f, 0.900f, 0.900f, 1.0f)); // 镜面反射
	wawa->setShininess(50.0f); // 高光系数
	// 加到painter中
	painter->addMesh(wawa, "mesh_b", "./assets/wawa.png", vshader, fshader); 	// 指定纹理与着色器
	meshList.push_back(wawa);

	// 初始化OFF模型
	mesh_init();

	// 创建平面
	plane->generateSquare(White);
	plane->setRotation(glm::vec3(90.0, 0.0, 0.0));
	plane->setTranslation(glm::vec3(0.0, -0.01, 0.0));
	plane->setScale(glm::vec3(5.0, 5.0, 5.0));
	// 设置材质
	plane->setAmbient(glm::vec4(0.2f, 0.1f, 0.05f, 1.0f)); // 环境光
	plane->setDiffuse(glm::vec4(0.6f, 0.4f, 0.2f, 1.0f)); // 漫反射
	plane->setSpecular(glm::vec4(0.3f, 0.3f, 0.3f, 1.0f)); // 镜面反射
	plane->setShininess(10.0f); // 高光系数
	// 加到plane_painter中
	plane_painter->addMesh(plane, "mesh_c", "./assets/plane.png", vshader, fshader);
	meshList.push_back(plane);

	//加载着色器
	fshader = "shaders/fshader_win.glsl";
	// 设置物体的大小（初始的旋转和位移都为0）
	Torso->setNormalize(true);
	Head->setNormalize(true);
	RightUpperArm->setNormalize(true);
	LeftUpperArm->setNormalize(true);
	RightUpperLeg->setNormalize(true);
	LeftUpperLeg->setNormalize(true);
	RightLowerArm->setNormalize(true);
	LeftLowerArm->setNormalize(true);
	RightLowerLeg->setNormalize(true);
	LeftLowerLeg->setNormalize(true);
	RightShoe->setNormalize(true);
	LeftShoe->setNormalize(true);
	// 加载机器人
	Torso->generateCube(Blue);
	Head->generateCube(Green);
	RightUpperArm->generateCube(Yellow);
	LeftUpperArm->generateCube(Yellow);
	RightUpperLeg->generateCube(Brown);
	LeftUpperLeg->generateCube(Brown);
	RightLowerArm->generateCube(Red);
	LeftLowerArm->generateCube(Red);
	RightLowerLeg->generateCube(Cyan);
	LeftLowerLeg->generateCube(Cyan);
	RightShoe->generateCube(Purple);
	LeftShoe->generateCube(Purple);

	// 将物体的顶点数据传递
	bindObjectAndData(Torso, TorsoObject, vshader, fshader);
	bindObjectAndData(Head, HeadObject, vshader, fshader);
	bindObjectAndData(RightUpperArm, RightUpperArmObject, vshader, fshader);
	bindObjectAndData(LeftUpperArm, LeftUpperArmObject, vshader, fshader);
	bindObjectAndData(RightUpperLeg, RightUpperLegObject, vshader, fshader);
	bindObjectAndData(LeftUpperLeg, LeftUpperLegObject, vshader, fshader);
	bindObjectAndData(RightLowerArm, RightLowerArmObject, vshader, fshader);
	bindObjectAndData(LeftLowerArm, LeftLowerArmObject, vshader, fshader);
	bindObjectAndData(RightLowerLeg, RightLowerLegObject, vshader, fshader);
	bindObjectAndData(LeftLowerLeg, LeftLowerLegObject, vshader, fshader);
	bindObjectAndData(RightShoe, RightShoeObject, vshader, fshader);
	bindObjectAndData(LeftShoe, LeftShoeObject, vshader, fshader);
	// 天蓝色
	glClearColor(0.42, 0.78, 1.0, 1.0);
}

/* ------------------------ 绘制OFF物体的几何数据 ------------------------ */
void drawObject(TriMesh* mesh, openGLObject& mesh_object, int a) {
	glm::mat4 modelMatrix;
	// 绑定顶点数组对象和着色器程序
	glBindVertexArray(mesh_object.vao);
	glUseProgram(mesh_object.program);
	// 分别为物体设置模型变换矩阵
	modelMatrix = mesh->getModelMatrix();
	glUniformMatrix4fv(mesh_object.modelLocation, 1, GL_FALSE, &modelMatrix[0][0]);
	glUniformMatrix4fv(mesh_object.viewLocation, 1, GL_TRUE, &camera->viewMatrix[0][0]);
	glUniformMatrix4fv(mesh_object.projectionLocation, 1, GL_TRUE, &camera->projMatrix[0][0]);
	// 调用glDrawArrays绘制物体的几何图形
	glUniform1i(mesh_object.shadowLocation, a);
	bindLightAndMaterial(mesh, mesh_object, light, camera);
	glDrawArrays(GL_TRIANGLES, 0, mesh->getPoints().size());
}

/* ------------------------ 绘制OFF物体的阴影 ------------------------ */
void drawShadow(TriMesh* m, openGLObject& mesh_object, int shadow) {
	// 根据光源位置，计算阴影投影矩阵
	light_position = light->getTranslation();
	float lx = light_position[0];
	float ly = light_position[1];
	float lz = light_position[2];
	glm::mat4 shadowProjMatrix(
		-ly, 0.0, 0.0, 0.0,
		lx, 0.0, lz, 1.0,
		0.0, 0.0, -ly, 0.0,
		0.0, 0.0, 0.0, -ly);
	// 计算阴影的模型变换矩阵。
	glm::mat4 modelMatrix = m->getModelMatrix();
	modelMatrix = shadowProjMatrix * modelMatrix;
	// 传递 isShadow 变量
	glUniform1i(mesh_object.shadowLocation, shadow);
	// 传递 unifrom 关键字的矩阵数据。
	glUniformMatrix4fv(mesh_object.modelLocation, 1, GL_FALSE, &modelMatrix[0][0]);
	// 绘制
	glDrawArrays(GL_TRIANGLES, 0, m->getPoints().size());
}


/* ------------------------ 渲染、绘制整个场景 ------------------------ */
void display()
{
	// 清除颜色缓冲区和深度缓冲区
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	// 更新相机的位置和视图矩阵
	camera->updateCamera();
	camera->viewMatrix = camera->getViewMatrix();
	camera->projMatrix = camera->getProjectionMatrix(true);

	// 绘制纹理物体
	painter->drawMeshes(light, camera, 1);

	plane_painter->drawMeshes(light, camera, -1);

	// 绘制光照模型及阴影
	drawObject(mesh, mesh_object, 0);
	drawShadow(mesh, mesh_object, 3);

	// 物体的变换矩阵
	glm::mat4 modelMatrix;
	modelMatrix = glm::mat4(1.0);

	// 保持变换矩阵的栈
	MatrixStack mstack;

	// ------------------------ 躯干 ------------------------
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, 0.55, 0.7));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.Torso]), glm::vec3(0.0, 1.0, 0.0));
	torso(modelMatrix);
	mstack.push(modelMatrix); // 保存躯干变换矩阵

	// ------------------------ 头部 ------------------------
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, robot.TORSO_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.Head]), glm::vec3(0.0, 1.0, 0.0));
	head(modelMatrix);
	modelMatrix = mstack.pop();

	// ------------------------ 左臂 ------------------------
	mstack.push(modelMatrix);
	// 左大臂
	modelMatrix = glm::translate(modelMatrix, glm::vec3(-0.5 * robot.TORSO_WIDTH - 0.5 * robot.UPPER_ARM_WIDTH, robot.TORSO_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.LeftUpperArm]), glm::vec3(0.0, 0.0, 1.0));
	left_upper_arm(modelMatrix);

	// 左小臂
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_ARM_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.LeftLowerArm]), glm::vec3(1.0, 0.0, 0.0));
	left_lower_arm(modelMatrix);

	modelMatrix = mstack.pop(); // 恢复躯干变换矩阵

	// ------------------------ 右臂 ------------------------
	mstack.push(modelMatrix);   // 保存躯干变换矩阵
	// 右大臂
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.5 * robot.TORSO_WIDTH + 0.5 * robot.UPPER_ARM_WIDTH, robot.TORSO_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.RightUpperArm]), glm::vec3(1.0, .0, 0.0));
	right_upper_arm(modelMatrix);
	// 右小臂
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_ARM_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.RightLowerArm]), glm::vec3(1.0, 0.0, 0.0));
	right_lower_arm(modelMatrix);
	modelMatrix = mstack.pop(); // 恢复躯干变换矩阵

	// ------------------------ 左腿 ------------------------
	mstack.push(modelMatrix);   // 保存躯干变换矩阵
	//左大腿
	modelMatrix = glm::translate(modelMatrix, glm::vec3(-0.35 * robot.TORSO_WIDTH, 0.0, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.LeftUpperLeg]), glm::vec3(1.0, 0.0, 0.0));
	left_upper_leg(modelMatrix);
	// 左小腿
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_LEG_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.LeftLowerLeg]), glm::vec3(1.0, 0.0, 0.0));
	left_lower_leg(modelMatrix);
	// 左鞋
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_LEG_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.LeftShoeObject]), glm::vec3(1.0, 0.0, 0.0));
	left_foot_shoe(modelMatrix);
	modelMatrix = mstack.pop(); // 恢复躯干变换矩阵

	// ------------------------ 右腿 ------------------------
	mstack.push(modelMatrix);   // 保存躯干变换矩阵
	// 右大腿
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.35 * robot.TORSO_WIDTH, 0.0, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.RightUpperLeg]), glm::vec3(1.0, 0.0, 0.0));
	right_upper_leg(modelMatrix);
	// 右小腿
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_LEG_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.RightLowerLeg]), glm::vec3(1.0, 0.0, 0.0));
	right_lower_leg(modelMatrix);
	// 右鞋
	modelMatrix = glm::translate(modelMatrix, glm::vec3(0.0, -robot.UPPER_LEG_HEIGHT, 0.0));
	modelMatrix = glm::rotate(modelMatrix, glm::radians(robot.theta[robot.RightShoeObject]), glm::vec3(1.0, 0.0, 0.0));
	right_foot_shoe(modelMatrix);
	modelMatrix = mstack.pop(); // 恢复躯干变换矩阵
}

/* ------------------------ 输出帮助 ------------------------ */
void printHelp()
{

	std::cout << "=========================按键介绍==============================" << std::endl << std::endl;

	//std::cout << "按键介绍" << std::endl;
	std::cout <<
		"<---------- 窗口控制部分 ---------->" << std::endl <<
		"		ESC:			退出" << std::endl <<
		"		q/Q:			退出" << std::endl <<
		std::endl <<
		"<---------- 机器人控制选择部分 ---------->" << std::endl <<
		"		1:			躯干" << std::endl <<
		"		2:			头部" << std::endl <<
		"		3:			右大臂" << std::endl <<
		"		4:			右小臂" << std::endl <<
		"		5:			左大臂" << std::endl <<
		"		6:			左小臂" << std::endl <<
		"		7:			右大腿" << std::endl <<
		"		8:			右小腿" << std::endl <<
		"		9:			左大腿" << std::endl <<
		"		0:			左小腿" << std::endl << std::endl <<
		"<---------- 机器人操作部分 ---------->" << std::endl <<
		"		a/A:			增加旋转角度" << std::endl <<
		"		d/D:			减小旋转角度" << std::endl <<
		std::endl <<

		"<---------- OFF物体切换部分 ---------->" << std::endl <<
		"		s/S:			切换为杰尼龟" << std::endl <<
		"		p/P:			切换为皮卡丘" << std::endl <<
		"		c/C:			切换为奶牛" << std::endl <<
		std::endl <<

		"<---------- 物体选择部分 ---------->" << std::endl <<
		"		t/T:			选择控制桌子" << std::endl <<
		"		w/W:			选择控制娃娃" << std::endl <<
		"		o/O:			选择控制的OFF物体" << std::endl << std::endl <<
		"<---------- 物体操作部分 ---------->" << std::endl <<
		"		left:			左移" << std::endl <<
		"		right:			右移" << std::endl <<
		"		up:			前移" << std::endl <<
		"		down:			后移" << std::endl <<
		"		+/=:			变大" << std::endl <<
		"		-/_:			变小" << std::endl <<
		"		j/J:			顺时针旋转/逆时针旋转" << std::endl <<
		std::endl <<

		"<---------- 相机控制部分 ---------->" << std::endl <<
		"		r/R:			顺时针旋转/逆时针旋转" << std::endl <<
		"		k/K:			上移视角/下移视角" << std::endl <<
		"		SPACE:			重置相机" << std::endl <<
		std::endl <<

		"<---------- 光源控制部分 ---------->" << std::endl <<
		"		x/X:			光源左移/光源右移" << std::endl <<
		"		y/Y:			光源下移/光源上移" << std::endl <<
		"		z/Z:			光源前移/光源后移" << std::endl <<
		std::endl;
}

TriMesh* obj = new TriMesh();

/* ------------------------ 键盘响应函数 ------------------------ */ 
void key_callback(GLFWwindow* window, int key, int scancode, int action, int mode)
{
	float tmp;
	glm::vec3 temp;
	glm::vec4 ambient;
	if (action == GLFW_PRESS || action == GLFW_REPEAT) {
		switch (key)
		{
		case GLFW_KEY_ESCAPE: exit(EXIT_SUCCESS); break;
		case GLFW_KEY_Q: exit(EXIT_SUCCESS); break;
		case GLFW_KEY_1: Selected_mesh = robot.Torso; break;
		case GLFW_KEY_2: Selected_mesh = robot.Head; break;
		case GLFW_KEY_3: Selected_mesh = robot.RightUpperArm; break;
		case GLFW_KEY_4: Selected_mesh = robot.RightLowerArm; break;
		case GLFW_KEY_5: Selected_mesh = robot.LeftUpperArm; break;
		case GLFW_KEY_6: Selected_mesh = robot.LeftLowerArm; break;
		case GLFW_KEY_7: Selected_mesh = robot.RightUpperLeg; break;
		case GLFW_KEY_8: Selected_mesh = robot.RightLowerLeg; break;
		case GLFW_KEY_9: Selected_mesh = robot.LeftUpperLeg; break;
		case GLFW_KEY_0: Selected_mesh = robot.LeftLowerLeg; break;
			// 通过按键旋转机器人
		case GLFW_KEY_A:
			robot.theta[Selected_mesh] += 5.0;
			if (robot.theta[Selected_mesh] > 360.0)
				robot.theta[Selected_mesh] -= 360.0;
			break;
		case GLFW_KEY_D:
			robot.theta[Selected_mesh] -= 5.0;
			if (robot.theta[Selected_mesh] < 0.0)
				robot.theta[Selected_mesh] += 360.0;
			break;
			// 切换按键，选择展示的物体
		case GLFW_KEY_S:
			mesh = new TriMesh();
			mesh->readOff("./assets/Squirtle.off");
			mesh_init();
			break;
		case GLFW_KEY_P:
			mesh = new TriMesh();
			mesh->readOff("./assets/Pikachu.off");
			mesh_init();
			break;
		case GLFW_KEY_C:
			mesh = new TriMesh();
			mesh->readOff("./assets/Cow.off");
			mesh_init();
			break;
			// 选择需要控制的物体
		case GLFW_KEY_T:
			obj = table;
			break;
		case GLFW_KEY_W:
			obj = wawa;
			break;
		case GLFW_KEY_O:
			obj = mesh;//Off模型
			break;
			// 对选择的物体
		case GLFW_KEY_MINUS:
			temp = obj->getScale();
			temp.x -= 0.2;
			temp.y -= 0.2;
			temp.z -= 0.2;
			obj->setScale(temp);
			break;
		case GLFW_KEY_EQUAL:
			temp = obj->getScale();
			temp.x += 0.2;
			temp.y += 0.2;
			temp.z += 0.2;
			obj->setScale(temp);
			break;
		case GLFW_KEY_J:
			temp = obj->getRotation();
			if (mode == GLFW_MOD_SHIFT)
				temp.y += 90.0;
			else
				temp.y -= 90.0;
			obj->setRotation(temp);
			break;
		case GLFW_KEY_LEFT:
			temp = obj->getTranslation();
			temp.z += 0.2;
			obj->setTranslation(temp);
			break;
		case GLFW_KEY_RIGHT:
			temp = obj->getTranslation();
			temp.z -= 0.2;
			obj->setTranslation(temp);
			break;
		case GLFW_KEY_UP:
			temp = obj->getTranslation();
			temp.x -= 0.2;
			obj->setTranslation(temp);
			break;
		case GLFW_KEY_DOWN:
			temp = obj->getTranslation();
			temp.x += 0.2;
			obj->setTranslation(temp);
			break;
		case GLFW_KEY_X:
			light_position = light->getTranslation();
			if (mode == GLFW_MOD_SHIFT)
				light_position[0] += move_step_size;
			else
				light_position[0] -= move_step_size;
			light->setTranslation(light_position);
			break;
		case GLFW_KEY_Y:
			light_position = light->getTranslation();
			if (mode == GLFW_MOD_SHIFT)
				light_position[1] += move_step_size;
			else {
				light_position[1] -= move_step_size;
				if (light_position[1] <= 1.0) {
					light_position[1] += move_step_size;
				}
			}
			light->setTranslation(light_position);
			break;
		case GLFW_KEY_Z:
			light_position = light->getTranslation();
			if (mode == GLFW_MOD_SHIFT)
				light_position[2] += move_step_size;
			else
				light_position[2] -= move_step_size;
			light->setTranslation(light_position);
			break;
		default:
			camera->keyboard(key, action, mode);
			break;
		}
	}
}

/* ------------------------ 释放内存 ------------------------ */
void cleanData() {

	// 释放内存
	delete camera;
	camera = NULL;

	delete light;
	light = NULL;

	painter->cleanMeshes();

	delete painter;
	painter = NULL;

	for (int i = 0; i < meshList.size(); i++) {
		meshList[i]->cleanData();
		delete meshList[i];
	}
	meshList.clear();

}

void framebuffer_size_callback(GLFWwindow* window, int width, int height);

int main(int argc, char** argv)
{
	// 初始化GLFW库，必须是应用程序调用的第一个GLFW函数
	glfwInit();

	// 配置GLFW
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

#ifdef __APPLE__
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif
	//设置字符格式
#pragma execution_character_set("utf-8");
	// 配置窗口属性
	GLFWwindow* window = glfwCreateWindow(1000, 1000, u8"2022280310_林浩晟_期末大作业", NULL, NULL);
	if (window == NULL)
	{
		std::cout << "Failed to create GLFW window" << std::endl;
		glfwTerminate();
		return -1;
	}
	glfwMakeContextCurrent(window);
	glfwSetKeyCallback(window, key_callback);
	glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);

	// 调用任何OpenGL的函数之前初始化GLAD
	// ---------------------------------------
	if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
	{
		std::cout << "Failed to initialize GLAD" << std::endl;
		return -1;
	}
	mesh->setNormalize(true);// 初始读取的OFF模型
	mesh->readOff("./assets/Pikachu.off");
	// 初始化图形
	init();
	// 输出帮助信息
	printHelp();
	// 启用深度测试
	glEnable(GL_DEPTH_TEST);
	while (!glfwWindowShouldClose(window))
	{
		display();
		// 交换颜色缓冲 以及 检查有没有触发什么事件（比如键盘输入、鼠标移动等）
		// -------------------------------------------------------------------------------
		glfwSwapBuffers(window);
		glfwPollEvents();
	}

	cleanData();


	return 0;
}

// 每当窗口改变大小，GLFW会调用这个函数并填充相应的参数供你处理。
// ---------------------------------------------------------------------------------------------
void framebuffer_size_callback(GLFWwindow* window, int width, int height)
{
	// make sure the viewport matches the new window dimensions; note that width and 
	// height will be significantly larger than specified on retina displays.
	glViewport(0, 0, width, height);
}