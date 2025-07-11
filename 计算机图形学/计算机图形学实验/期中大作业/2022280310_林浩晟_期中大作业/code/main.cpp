/*
 *        Computer Graphics Course - Shenzhen University
 *    Mid-term Assignment - Tetris implementation sample code
 * ============================================================
 *
 * - ����������ǲο����룬����Ҫ����ο���ҵ˵��������˳������ɡ�
 * - ��������OpenGL�����������������У���ο���һ��ʵ��γ�����ĵ���
 *
 * - ��ʵ�ֹ������£�
 * - 1) �������̸�͡�L���ͷ���
 * - 2) ������/��/�¼����Ʒ�����ƶ����ϼ���ת����
 *
 * - δʵ�ֹ������£�
 * - 1) ���ơ�J������Z������״�ķ���
 * - 2) ������ɷ��鲢���ϲ�ͬ����ɫ
 * - 3) ������Զ������ƶ�
 * - 4) ����֮�䡢������߽�֮�����ײ���
 * - 5) ���̸���ÿһ�������֮���Զ�����
 * - 6) ����
 *
 */

#include "Angel.h"

#include <cstdlib>
#include <iostream>
#include <string>
#include <random>
#include <iomanip> 
using namespace std;
int starttime;			// ���Ʒ��������ƶ�ʱ��
int rotation = 0;		// ���Ƶ�ǰ�����еķ�����ת
glm::vec2 tile[4];			// ��ʾ��ǰ�����еķ���
bool gameover = false;	// ��Ϸ�������Ʊ���
int xsize = 400;		// ���ڴ�С��������Ҫ�䶯���ڴ�С����
int ysize = 720;

int shape;//��������

int color;//��ɫ����
// ���������С
int tile_width = 33;

// ���񲼴�С
const int board_width = 10;
const int board_height = 20;
bool flag = true;
// ����������Ƭ�Ķ�������
const int points_num = board_height * board_width * 6;

// �����û�ֱ�ߵķ�����������
// �������� board_width+1 ��
// �������� board_height+1 ��
// һ����2����������
// �����ߵ�����
const int board_line_num = (board_width + 1) + (board_height + 1);


// һ�������ʾ���п��ܳ��ֵķ���ͷ���
glm::vec2 allRotationsshape[7][4][4] = {
	{
		{glm::vec2(0, 0), glm::vec2(-1,0), glm::vec2(1, 0), glm::vec2(-1,-1)},	//   "L"
		{glm::vec2(0, 1), glm::vec2(0, 0), glm::vec2(0,-1), glm::vec2(1, -1)},   //
		{glm::vec2(1, 1), glm::vec2(-1,0), glm::vec2(0, 0), glm::vec2(1,  0)},   //
		{glm::vec2(-1,1), glm::vec2(0, 1), glm::vec2(0, 0), glm::vec2(0, -1)}},
	{
		{glm::vec2(-2,0),glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0)},//I
		{glm::vec2(0,1),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(0,-2)},
		{glm::vec2(-2,0),glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0)},
		{glm::vec2(0,1),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(0,-2)}},
	{
		{glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1),glm::vec2(1,0)},//S
		{glm::vec2(0,1),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(1,- 1)},
		{glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1),glm::vec2(1,0)},
		{glm::vec2(0,1),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(1,- 1)}},
	{
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(1,-1)},//Z
		{glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(1,1)},
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(1,-1)},
		{glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(1,1)}},
	{
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(1,-1)},//J
		{glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(0,1),glm::vec2(1,1)},
		{glm::vec2(-1,1),glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0)},
		{glm::vec2(-1,-1),glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(0,1)}},
	{
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0),glm::vec2(0,-1)},//T
		{glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(0,1),glm::vec2(1,0)},
		{glm::vec2(0,1),glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(1,0)},
		{glm::vec2(-1,0),glm::vec2(0,-1),glm::vec2(0,0),glm::vec2(0,1)}},
	{
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1)},
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1)},
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1)},
		{glm::vec2(-1,0),glm::vec2(0,0),glm::vec2(0,-1),glm::vec2(-1,-1)}}//O
};

// ���ƴ��ڵ���ɫ����
glm::vec4 orange = glm::vec4(1.0, 0.5, 0.0, 1.0);
glm::vec4 white = glm::vec4(1.0, 1.0, 1.0, 1.0);
glm::vec4 black = glm::vec4(0.0, 0.0, 0.0, 1.0);
glm::vec4 green = glm::vec4(0.0, 1.0, 0.0, 1.0);
glm::vec4 blue = glm::vec4(0.0, 0.0, 1.0, 1.0);
glm::vec4 red = glm::vec4(1.0, 0.0, 0.0, 1.0);
glm::vec4 gray = glm::vec4(0.5, 0.5, 0.5, 1.0);
glm::vec4 pink = glm::vec4(1.0, 0.75, 0.8, 1.0);
glm::vec4 purple = glm::vec4(0.5, 0.0, 0.5, 1.0);
glm::vec4 colors[] = {
	orange,green,blue,red,pink,purple,gray
};

// ��ǰ�����λ�ã������̸�����½�Ϊԭ�������ϵ��
glm::vec2 tilepos = glm::vec2(5, 19);

// ���������ʾ���̸��ĳλ���Ƿ񱻷�����䣬��board[x][y] = true��ʾ(x,y)�����ӱ���䡣
// �������̸�����½�Ϊԭ�������ϵ��
bool board[board_width][board_height];

glm::vec4 board_color[board_width][board_height];//��¼ÿһ�����ӵ���ɫ

// �����̸�ĳЩλ�ñ��������֮�󣬼�¼��Щλ���ϱ�������ɫ
glm::vec4 board_colours[points_num];

GLuint locxsize;
GLuint locysize;

GLuint vao[3];
GLuint vbo[6];
int score = 0;
bool checkvalid(glm::vec2 cellpos)
{
	if ((cellpos.x >= 0) && (cellpos.x < board_width) && (cellpos.y >= 0) && (cellpos.y < board_height) &&
		!board[(int)cellpos.x][(int)cellpos.y])//��֤���ص�  ����Ϊ�ղ��ܽ�
		return true;
	else
		return false;
}
void welcome()
{
	cout << "��ӭ��������˹���飡" << endl;
	cout << "***��Ϸ�淨***" << endl;
	cout << "��������ƶ�" << endl;
	cout << "�Ҽ������ƶ�" << endl;
	cout << "�¼����������ƶ�" << endl;
	cout << "�ϼ���ת����" << endl;
	cout << "�ո��ֱ�ӳ��׷���" << endl;
	cout << "r�����¿�ʼ��Ϸ" << endl;
	cout << "esc����q���˳���Ϸ" << endl;
	cout << "��ǰ�÷�:" <<score<< flush;
}

void updateScore(int score) {
	// ������ƻ� "��ǰ�÷�:" ���棬����ԭ���ķ���
	cout << "\r��ǰ�÷�: " << setw(2) << score << flush;
}
void framebuffer_size_callback(GLFWwindow* window, int width, int height)
{
	glViewport(0, 0, width, height);
}

// �޸����̸���posλ�õ���ɫΪcolour�����Ҹ��¶�Ӧ��VBO
void changecellcolour(glm::vec2 pos, glm::vec4 colour)
{
	// ÿ�������Ǹ������Σ��������������Σ��ܹ�6�����㣬�����ض���λ�ø����ʵ�����ɫ
	for (int i = 0; i < 6; i++)
		board_colours[(int)(6 * (board_width * pos.y + pos.x) + i)] = colour;

	glm::vec4 newcolours[6] = { colour, colour, colour, colour, colour, colour };

	glBindBuffer(GL_ARRAY_BUFFER, vbo[3]);

	// ����ƫ���������ʵ���λ�ø�����ɫ
	int offset = 6 * sizeof(glm::vec4) * (int)(board_width * pos.y + pos.x);
	glBufferSubData(GL_ARRAY_BUFFER, offset, sizeof(newcolours), newcolours);
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	board_color[(int)pos.x][(int)pos.y] = colour;//��¼��ǰ���ӵ���ɫ
}

// ��ǰ�����ƶ�������תʱ������VBO
void updatetile()
{
	glBindBuffer(GL_ARRAY_BUFFER, vbo[4]);

	// ÿ����������ĸ�����
	for (int i = 0; i < 4; i++)
	{
		// ������ӵ�����ֵ
		GLfloat x = tilepos.x + tile[i].x;
		GLfloat y = tilepos.y + tile[i].y;

		glm::vec4 p1 = glm::vec4(tile_width + (x * tile_width), tile_width + (y * tile_width), .4, 1);
		glm::vec4 p2 = glm::vec4(tile_width + (x * tile_width), tile_width * 2 + (y * tile_width), .4, 1);
		glm::vec4 p3 = glm::vec4(tile_width * 2 + (x * tile_width), tile_width + (y * tile_width), .4, 1);
		glm::vec4 p4 = glm::vec4(tile_width * 2 + (x * tile_width), tile_width * 2 + (y * tile_width), .4, 1);

		// ÿ�����Ӱ������������Σ�������6����������
		glm::vec4 newpoints[6] = { p1, p2, p3, p2, p3, p4 };
		glBufferSubData(GL_ARRAY_BUFFER, i * 6 * sizeof(glm::vec4), 6 * sizeof(glm::vec4), newpoints);
	}
	glBindVertexArray(0);

}

// ���õ�ǰ����Ϊ��һ���������ֵķ��顣����Ϸ��ʼ��ʱ�����������һ����ʼ�ķ��飬
// ����Ϸ������ʱ���жϣ�û���㹻�Ŀռ��������µķ��顣
void newtile()
{
	// ���·���������̸���������м�λ�ò�����Ĭ�ϵ���ת����
	tilepos = glm::vec2(5, 19);
	rotation = 0;
	//��������������������״
	srand(time(0));//�������������
	shape = rand() % 7;
	for (int i = 0; i < 4; i++)//�����ĸ�����
	{
		tile[i] = allRotationsshape[shape][0][i];
		//����ϵͳ                               �����������
		if (checkvalid(glm::vec2((int)tile[i].x + 5, (int)tile[i].y + 19)) == false)//����޷�����
		{
			system("cls");
			flag = false;
			cout << "��Ϸ������" << endl;
			cout << "���ķ����ǣ�" << score << endl;
			cout << "��r���¿�ʼ��Ϸ" << endl;
			cout << "��esc��q���˳���Ϸ" << endl;
		}
	}

	updatetile();

	// ���·��鸳����ɫ
	color = rand() % 7;
	glm::vec4 newcolours[24];
	for (int i = 0; i < 24; i++)//��ֵ�����ɫ
		newcolours[i] = colors[color];
	glBindBuffer(GL_ARRAY_BUFFER, vbo[5]);
	glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(newcolours), newcolours);
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	glBindVertexArray(0);
}

// ��Ϸ��OpenGL��ʼ��
void init()
{
	// ��ʼ�����̸������û�ֱ�ߵķ�����������
	// �������� board_width+1 ��
	// �������� board_height+1 ��
	// һ����2���������꣬����ÿ������һ����ɫֵ

	glm::vec4 gridpoints[board_line_num * 2];
	glm::vec4 gridcolours[board_line_num * 2];

	// ����������
	// ������
	for (int i = 0; i < (board_width + 1); i++)
	{
		gridpoints[2 * i] = glm::vec4((tile_width + (tile_width * i)), tile_width, 0, 1);
		gridpoints[2 * i + 1] = glm::vec4((tile_width + (tile_width * i)), (board_height + 1) * tile_width, 0, 1);
	}

	// ˮƽ��
	for (int i = 0; i < (board_height + 1); i++)
	{
		gridpoints[2 * (board_width + 1) + 2 * i] = glm::vec4(tile_width, (tile_width + (tile_width * i)), 0, 1);
		gridpoints[2 * (board_width + 1) + 2 * i + 1] = glm::vec4((board_width + 1) * tile_width, (tile_width + (tile_width * i)), 0, 1);
	}

	// �������߸��ɰ�ɫ
	for (int i = 0; i < (board_line_num * 2); i++)
		gridcolours[i] = white;

	// ��ʼ�����̸񣬲���û�б����ĸ������óɺ�ɫ
	glm::vec4 boardpoints[points_num];
	for (int i = 0; i < points_num; i++)
		board_colours[i] = black;

	// ��ÿ�����ӣ���ʼ��6�����㣬��ʾ���������Σ�����һ�������θ���
	for (int i = 0; i < board_height; i++)
		for (int j = 0; j < board_width; j++)
		{
			glm::vec4 p1 = glm::vec4(tile_width + (j * tile_width), tile_width + (i * tile_width), .5, 1);
			glm::vec4 p2 = glm::vec4(tile_width + (j * tile_width), tile_width * 2 + (i * tile_width), .5, 1);
			glm::vec4 p3 = glm::vec4(tile_width * 2 + (j * tile_width), tile_width + (i * tile_width), .5, 1);
			glm::vec4 p4 = glm::vec4(tile_width * 2 + (j * tile_width), tile_width * 2 + (i * tile_width), .5, 1);
			boardpoints[6 * (board_width * i + j) + 0] = p1;
			boardpoints[6 * (board_width * i + j) + 1] = p2;
			boardpoints[6 * (board_width * i + j) + 2] = p3;
			boardpoints[6 * (board_width * i + j) + 3] = p2;
			boardpoints[6 * (board_width * i + j) + 4] = p3;
			boardpoints[6 * (board_width * i + j) + 5] = p4;
		}

	// �����̸�����λ�õ�����������Ϊfalse��û�б���䣩
	for (int i = 0; i < board_width; i++)
		for (int j = 0; j < board_height; j++)
		{
			board[i][j] = false;
			board_color[i][j] = black;//Ĭ��û���
		}

	// ������ɫ��
	std::string vshader, fshader;
	vshader = "shaders/vshader.glsl";
	fshader = "shaders/fshader.glsl";
	GLuint program = InitShader(vshader.c_str(), fshader.c_str());
	glUseProgram(program);

	locxsize = glGetUniformLocation(program, "xsize");
	locysize = glGetUniformLocation(program, "ysize");

	GLuint vPosition = glGetAttribLocation(program, "vPosition");
	GLuint vColor = glGetAttribLocation(program, "vColor");


	glGenVertexArrays(3, &vao[0]);
	glBindVertexArray(vao[0]);		// ���̸񶥵�

	glGenBuffers(2, vbo);

	// ���̸񶥵�λ��
	glBindBuffer(GL_ARRAY_BUFFER, vbo[0]);
	glBufferData(GL_ARRAY_BUFFER, (board_line_num * 2) * sizeof(glm::vec4), gridpoints, GL_STATIC_DRAW);
	glVertexAttribPointer(vPosition, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vPosition);

	// ���̸񶥵���ɫ
	glBindBuffer(GL_ARRAY_BUFFER, vbo[1]);
	glBufferData(GL_ARRAY_BUFFER, (board_line_num * 2) * sizeof(glm::vec4), gridcolours, GL_STATIC_DRAW);
	glVertexAttribPointer(vColor, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vColor);


	glBindVertexArray(vao[1]);		// ���̸�ÿ������

	glGenBuffers(2, &vbo[2]);

	// ���̸�ÿ�����Ӷ���λ��
	glBindBuffer(GL_ARRAY_BUFFER, vbo[2]);
	glBufferData(GL_ARRAY_BUFFER, points_num * sizeof(glm::vec4), boardpoints, GL_STATIC_DRAW);
	glVertexAttribPointer(vPosition, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vPosition);

	// ���̸�ÿ�����Ӷ�����ɫ
	glBindBuffer(GL_ARRAY_BUFFER, vbo[3]);
	glBufferData(GL_ARRAY_BUFFER, points_num * sizeof(glm::vec4), board_colours, GL_DYNAMIC_DRAW);
	glVertexAttribPointer(vColor, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vColor);


	glBindVertexArray(vao[2]);		// ��ǰ����

	glGenBuffers(2, &vbo[4]);

	// ��ǰ���鶥��λ��
	glBindBuffer(GL_ARRAY_BUFFER, vbo[4]);
	glBufferData(GL_ARRAY_BUFFER, 24 * sizeof(glm::vec4), NULL, GL_DYNAMIC_DRAW);
	glVertexAttribPointer(vPosition, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vPosition);

	// ��ǰ���鶥����ɫ
	glBindBuffer(GL_ARRAY_BUFFER, vbo[5]);
	glBufferData(GL_ARRAY_BUFFER, 24 * sizeof(glm::vec4), NULL, GL_DYNAMIC_DRAW);
	glVertexAttribPointer(vColor, 4, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(vColor);


	glBindVertexArray(0);

	glClearColor(0, 0, 0, 0);

	// ��Ϸ��ʼ��
	newtile();
	// starttime = glutGet(GLUT_ELAPSED_TIME);
}

// �����������㹻�ռ���������ת��ǰ����
void rotate()
{
	// ����õ���һ����ת����
	int nextrotation = (rotation + 1) % 4;

	// ��鵱ǰ��ת֮���λ�õ���Ч��
	if (checkvalid((allRotationsshape[shape][nextrotation][0]) + tilepos)
		&& checkvalid((allRotationsshape[shape][nextrotation][1]) + tilepos)
		&& checkvalid((allRotationsshape[shape][nextrotation][2]) + tilepos)
		&& checkvalid((allRotationsshape[shape][nextrotation][3]) + tilepos))
	{
		// ������ת������ǰ��������Ϊ��ת֮��ķ���
		rotation = nextrotation;
		for (int i = 0; i < 4; i++)
			tile[i] = allRotationsshape[shape][rotation][i];

		updatetile();
	}
}


// ������̸���row����û�б������
void checkfullrow(int row) {
	int i = 0;
	for (; i < board_width; i++) {
		if (board[i][row]==false) {
			return; // �����δ���ĸ��ӣ���ֱ�ӷ���
		}
	}
	score += 10;
	updateScore(score);//���·���
	// �����ǰ����������������У��������Ϸ�������
	for (int j = row;j < board_height;j++)
	{
		for (int i = 0;i < board_width;i++)
		{
			if (j + 1 < board_height && board[i][j + 1] == true)//��������з���
			{
				changecellcolour(glm::vec2(i, j), board_color[i][j + 1]);//��������
				board[i][j] = true;
			}
			else
			{
				changecellcolour(glm::vec2(i, j), black);
				board[i][j] = false;
			}
		}
	}
}

// ���õ�ǰ���飬���Ҹ������̸��Ӧλ�ö������ɫVBO
void settile()
{
	// ÿ������
	for (int i = 0; i < 4; i++)
	{
		// ��ȡ���������̸��ϵ�����
		int x = (tile[i] + tilepos).x;
		int y = (tile[i] + tilepos).y;
		// �����Ӷ�Ӧ�����̸��ϵ�λ������Ϊ���
		board[x][y] = true;
		// ������Ӧλ�õ���ɫ�޸�
		changecellcolour(glm::vec2(x, y), colors[color]);
	}
	for (int i = 0;i < 4;i++)
	{
		int y = (tile[i] + tilepos).y;
		checkfullrow(y);
	}
}

// ����λ��(x,y)���ƶ����顣��Ч���ƶ�ֵΪ(-1,0)��(1,0)��(0,-1)���ֱ��Ӧ����
// �����º������ƶ�������ƶ��ɹ�������ֵΪtrue����֮Ϊfalse
bool movetile(glm::vec2 direction)
{
	// �����ƶ�֮��ķ����λ������
	glm::vec2 newtilepos[4];
	for (int i = 0; i < 4; i++)
		newtilepos[i] = tile[i] + tilepos + direction;

	// ����ƶ�֮�����Ч��
	if (checkvalid(newtilepos[0])
		&& checkvalid(newtilepos[1])
		&& checkvalid(newtilepos[2])
		&& checkvalid(newtilepos[3]))
	{
		// ��Ч���ƶ��÷���
		tilepos.x = tilepos.x + direction.x;
		tilepos.y = tilepos.y + direction.y;

		updatetile();

		return true;
	}

	return false;
}

// ����������Ϸ
void restart()
{
	system("cls");
	cout << "��Ϸ������������" << endl;
	init();
}

// ��Ϸ��Ⱦ����
void display()
{
	glClear(GL_COLOR_BUFFER_BIT);

	glUniform1i(locxsize, xsize);
	glUniform1i(locysize, ysize);

	glBindVertexArray(vao[1]);
	glDrawArrays(GL_TRIANGLES, 0, points_num); // �������̸� (width * height * 2 ��������)
	glBindVertexArray(vao[2]);
	glDrawArrays(GL_TRIANGLES, 0, 24);	 // ���Ƶ�ǰ���� (8 ��������)
	glBindVertexArray(vao[0]);
	glDrawArrays(GL_LINES, 0, board_line_num * 2);		 // �������̸����

}

// �ڴ��ڱ������ʱ�򣬿������̸�Ĵ�С��ʹ֮���̶ֹ��ı�����
void reshape(GLsizei w, GLsizei h)
{
	xsize = w;
	ysize = h;
	glViewport(0, 0, w, h);
}

// ������Ӧ�¼��е����ⰴ����Ӧ
void key_callback(GLFWwindow* window, int key, int scancode, int action, int mode)
{
	if (!gameover)
	{
		switch (key)
		{
			// ���Ʒ�����ƶ����򣬸�����̬
		case GLFW_KEY_UP:	// ���ϰ�����ת����
			if (action == GLFW_PRESS || action == GLFW_REPEAT)
			{
				rotate();
				break;
			}
			else
			{
				break;
			}
		case GLFW_KEY_DOWN: // ���°����ƶ�����
			if (action == GLFW_PRESS || action == GLFW_REPEAT) {
				if (!movetile(glm::vec2(0, -1)))
				{
					settile();
					newtile();
					break;
				}
				else
				{
					break;
				}
			}
		case GLFW_KEY_LEFT:  // ���󰴼��ƶ�����
			if (action == GLFW_PRESS || action == GLFW_REPEAT) {
				movetile(glm::vec2(-1, 0));
				break;
			}
			else
			{
				break;
			}
		case GLFW_KEY_RIGHT: // ���Ұ����ƶ�����
			if (action == GLFW_PRESS || action == GLFW_REPEAT) {
				movetile(glm::vec2(1, 0));
				break;
			}
			else
			{
				break;
			}
		case GLFW_KEY_SPACE: 
			if (action == GLFW_PRESS || action == GLFW_REPEAT) {
				while (movetile(glm::vec2(0, -1))) {}//һֱ����
				settile();
				newtile();
				break;
			}
			else
			{
				break;
			}
			// ��Ϸ���á�
		case GLFW_KEY_ESCAPE:
			if (action == GLFW_PRESS) {
				exit(EXIT_SUCCESS);
				break;
			}
			else
			{
				break;
			}
		case GLFW_KEY_Q:
			if (action == GLFW_PRESS) {
				exit(EXIT_SUCCESS);
				break;
			}
			else
			{
				break;
			}

		case GLFW_KEY_R:
			if (action == GLFW_PRESS) {
				restart();
				break;
			}
			else
			{
				break;
			}
		}
	}
}

int main(int argc, char** argv)
{
	glfwInit();
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

#ifdef __APPLE__
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif

	// �������ڡ�
	GLFWwindow* window = glfwCreateWindow(500, 900, u8"2022280310_�ֺ���_���д���ҵ", NULL, NULL);
	if (window == NULL)
	{
		std::cout << "Failed to create GLFW window!" << std::endl;
		glfwTerminate();
		return -1;
	}
	glfwMakeContextCurrent(window);
	glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);
	glfwSetKeyCallback(window, key_callback);

	if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
	{
		std::cout << "Failed to initialize GLAD" << std::endl;
		return -1;
	}
	int next;

	init();
	welcome();
	while (!glfwWindowShouldClose(window))
	{
		display();
		glfwSwapBuffers(window);
		glfwPollEvents();
		int time = clock();//clock() �����Գ�������������ʱ��������
		while (time - next > 1000)//next��¼�ϴ�ִ�ж�����ʱ���
		{
			if (!movetile(glm::vec2(0, -1)))//�����ƶ�����
			{
				if (!flag)
					break;
				settile();
				newtile();
			}
			next = time;//�ظ�
		}
	}
	glfwTerminate();
	return 0;
}
