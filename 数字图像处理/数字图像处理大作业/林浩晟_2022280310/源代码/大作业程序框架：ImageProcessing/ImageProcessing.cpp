// ImageProcessing.cpp : Defines the entry point for the application.
//

#include "stdafx.h"
#include "resource.h"
#include <direct.h>
#include <commdlg.h>
#include <iostream>
#include <stdio.h>
#include <math.h>
#include <cmath>
#include <algorithm>
#include <commctrl.h>  // for Trackbar
#include <string.h>
#include <string>
#include <cstring>
#pragma comment(lib, "comctl32.lib")
using namespace std;
#define MAX_LOADSTRING 100

BOOL ReadImage(LPSTR, char*, int, int); //��ȡͼ����Ϣ��������Image[][]��
void ShowImage(char*, int, int, int, int);
BOOL ReadBmpImage(LPSTR, char*);
void ShowBmpImage(char*, int, int, int, int);
void OpenImageFileDlg(char*);
BOOL SaveBmpImage(LPSTR filename, char* imageData, int width, int height);
//********************************************************    ���ӵĺ���    ********************************************************
void SaveImageToTxt(const char* filename, char* nImage, int wImage, int hImage);
void SimpleGeometricTranslation(char* oImage, char* nImage, int wImage, int hImage, double* sgt_Array);
void SimpleGeometricTranslationBMP(char* oImage, char* nImage, int wImage, int hImage, double* sgt_Array);
void ImageRotation(char* oImage, char* nImage, int wImage, int hImage, double iAngle);
void ImageRotationBMP(char* oImage, char* nImage, int wImage, int hImage, double iAngle);
void SketchEffect(char* oImage, char* nImage, int wImage, int hImage);
void SketchEffectBMP(char* oImage, char* nImage, int wImage, int hImage);
void EmbossEffect(char* oImage, char* nImage, int wImage, int hImage);
void EmbossEffectBMP(char* oImage, char* nImage, int wImage, int hImage);
void CartoonEffect(char* oImage, char* nImage, int wImage, int hImage);
void CartoonEffectBMP(char* oImage, char* nImage, int wImage, int hImage);
void AdjustContrast(char* oImage, char* nImage, int wImage, int hImage, int contrast);
void AdjustContrastBMP(char* oImage, char* nImage, int wImage, int hImage, int contrast);
void BrightnessChangeBMP(char* oImage, char* nImage, int wImage, int hImage, int brightness);
void BrightnessChangeRAW(char* oImage, char* nImage, int wImage, int hImage, int brightness);
void Sharpen(char* inImage, char* outImage, int width, int height, int sharpnessLevel);
void SharpenBMP(char* inImage, char* outImage, int width, int height, int sharpnessLevel);
void FlipImageRAW(char* srcImage, char* dstImage, int width, int height);
void FlipImageBMP(char* srcImage, char* dstImage, int width, int height);
void GaussianBlurWithStrength(char* oImage, char* nImage, int wImage, int hImage, int strength);
void GaussianBlurWithStrengthBMP(char* oImage, char* nImage, int wImage, int hImage, int strength);
void ApplyCoolToneBMP(char* oImage, char* nImage, int wImage, int hImage);
void ApplyWarmToneBMP(char* oImage, char* nImage, int wImage, int hImage);
void ApplyMosaic(char* oImage, char* nImage, int w, int h, int x1, int y1, int x2, int y2, int blockSize);
void ApplyMosaicBMP(char* oImage, char* nImage, int w, int h, int x1, int y1, int x2, int y2, int blockSize);
int type;//.raw 0   .bmp 1
HDC  hWinDC;
int ImageWidth, ImageHeight;
char ImgDlgFileName[MAX_PATH];
char ImgDlgFileDir[MAX_PATH];
char OrgImage[1024 * 1024];
char NewImage[1024 * 1024];//���洦����ͼ��
char temp[1024 * 1024];
char temp1[1024 * 1024];

#define IMAGEWIDTH	256
#define IMAGEHEIGHT	256
#define XPOS		100
#define YPOS		100
#define HISTOGRAMHIEGHT 150

HWND hSlider = NULL;
HWND hSlider1 = NULL;
HWND hSlider2 = NULL;
HWND hSlider3 = NULL;
HWND hSlider4 = NULL;
HWND hStaticContrastText = NULL;
HWND hStaticBrightnessText = NULL;
HWND hStaticBlurText = NULL;
HWND hStaticRotateText = NULL;
HWND hStaticSharpenText = NULL;
HWND hBtnApply = NULL;
HWND hBtnReset = NULL;
HWND hBtnFlip = NULL;

POINT ptMosaic1, ptMosaic2;
bool isSelectingMosaic = false;  // �Ƿ�����ѡ�㣨����������ģʽ��
bool isFirstClick = true;        // �Ƿ����ڼ�¼��һ����

bool should = true;
bool shouldFlipHorizontal = false;
int currentContrastValue = 0;
const int SLIDER_MIN = -50;
const int SLIDER_MAX = 50;

int currentBrightnessValue = 0;
const int SLIDER_MIN1 = -100;
const int SLIDER_MAX1 = 100;

int currentBlurValue = 0;
const int SLIDER_MIN2 = 0;
const int SLIDER_MAX2 = 100;

int currentRotateValue = 0;
const int SLIDER_MIN3 = 0;
const int SLIDER_MAX3 = 360;

int currentSharpenValue = 0;
const int SLIDER_MIN4 = 0;
const int SLIDER_MAX4 = 100;

// Global Variables:
HINSTANCE hInst;								// current instance
TCHAR szTitle[MAX_LOADSTRING];								// The title bar text
TCHAR szWindowClass[MAX_LOADSTRING];								// The title bar text

// Foward declarations of functions included in this code module:
ATOM				MyRegisterClass(HINSTANCE hInstance);
BOOL				InitInstance(HINSTANCE, int);
LRESULT CALLBACK	WndProc(HWND, UINT, WPARAM, LPARAM);
LRESULT CALLBACK	About(HWND, UINT, WPARAM, LPARAM);

int APIENTRY WinMain(HINSTANCE hInstance,
	HINSTANCE hPrevInstance,
	LPSTR     lpCmdLine,
	int       nCmdShow)
{
	// TODO: Place code here.
	MSG msg;
	HACCEL hAccelTable;

	// Initialize global strings
	LoadString(hInstance, IDS_APP_TITLE, szTitle, MAX_LOADSTRING);
	LoadString(hInstance, IDC_IMAGEPROCESSING, szWindowClass, MAX_LOADSTRING);
	MyRegisterClass(hInstance);

	// Perform application initialization:
	if (!InitInstance(hInstance, nCmdShow))
	{
		return FALSE;
	}

	hAccelTable = LoadAccelerators(hInstance, (LPCTSTR)IDC_IMAGEPROCESSING);

	// Main message loop:
	while (GetMessage(&msg, NULL, 0, 0))
	{
		if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
		{
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}
	}

	return msg.wParam;
}


//
//  FUNCTION: MyRegisterClass()
//
//  PURPOSE: Registers the window class.
//
//  COMMENTS:
//
//    This function and its usage is only necessary if you want this code
//    to be compatible with Win32 systems prior to the 'RegisterClassEx'
//    function that was added to Windows 95. It is important to call this function
//    so that the application will get 'well formed' small icons associated
//    with it.
//
ATOM MyRegisterClass(HINSTANCE hInstance)
{
	WNDCLASSEX wcex;

	wcex.cbSize = sizeof(WNDCLASSEX);

	wcex.style = CS_HREDRAW | CS_VREDRAW;
	wcex.lpfnWndProc = (WNDPROC)WndProc;
	wcex.cbClsExtra = 0;
	wcex.cbWndExtra = 0;
	wcex.hInstance = hInstance;
	wcex.hIcon = LoadIcon(hInstance, (LPCTSTR)IDI_IMAGEPROCESSING);
	wcex.hCursor = LoadCursor(NULL, IDC_ARROW);
	wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
	wcex.lpszMenuName = (LPCSTR)IDC_IMAGEPROCESSING;
	wcex.lpszClassName = szWindowClass;
	wcex.hIconSm = LoadIcon(wcex.hInstance, (LPCTSTR)IDI_SMALL);

	return RegisterClassEx(&wcex);
}

//
//   FUNCTION: InitInstance(HANDLE, int)
//
//   PURPOSE: Saves instance handle and creates main window
//
//   COMMENTS:
//
//        In this function, we save the instance handle in a global variable and
//        create and display the main program window.
//
BOOL InitInstance(HINSTANCE hInstance, int nCmdShow)
{
	HWND hWnd;

	hInst = hInstance; // Store instance handle in our global variable

	hWnd = CreateWindow(szWindowClass, szTitle, WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT, 0, CW_USEDEFAULT, 0, NULL, NULL, hInstance, NULL);

	if (!hWnd)
	{
		return FALSE;
	}
	ShowWindow(hWnd, nCmdShow);
	UpdateWindow(hWnd);

	return TRUE;
}
void DestroyAllDynamicControls()
{
	if (hSlider) {
		DestroyWindow(hSlider);
		hSlider = NULL;
	}
	if (hSlider1) {
		DestroyWindow(hSlider1);
		hSlider1 = NULL;
	}
	if (hSlider2) {
		DestroyWindow(hSlider2);
		hSlider2 = NULL;
	}
	if (hSlider3) {
		DestroyWindow(hSlider3);
		hSlider3 = NULL;
	}
	if (hSlider4) {
		DestroyWindow(hSlider4);
		hSlider4 = NULL;
	}
	if (hStaticContrastText) {
		DestroyWindow(hStaticContrastText);
		hStaticContrastText = NULL;
	}
	if (hStaticBrightnessText) {
		DestroyWindow(hStaticBrightnessText);
		hStaticBrightnessText = NULL;
	}
	if (hStaticBlurText) {
		DestroyWindow(hStaticBlurText);
		hStaticBlurText = NULL;
	}
	if (hStaticRotateText) {
		DestroyWindow(hStaticRotateText);
		hStaticRotateText = NULL;
	}
	if (hStaticSharpenText) {
		DestroyWindow(hStaticSharpenText);
		hStaticSharpenText = NULL;
	}
	if (hBtnApply) {
		DestroyWindow(hBtnApply);
		hBtnApply = NULL;
	}
	if (hBtnFlip) {
		DestroyWindow(hBtnFlip);
		hBtnFlip = NULL;
	}
	if (hBtnReset) {
		DestroyWindow(hBtnReset);
		hBtnReset = NULL;
	}
	int currentContrastValue = 0;
	int currentBrightnessValue = 0;
	int currentBlurValue = 0;
	int currentRotateValue = 0;
	int currentSharpenValue = 0;
}
//
//  FUNCTION: WndProc(HWND, unsigned, WORD, LONG)
//
//  PURPOSE:  Processes messages for the main window.
//
//  WM_COMMAND	- process the application menu
//  WM_PAINT	- Paint the main window
//  WM_DESTROY	- post a quit message and return
//
//
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
	int wmId, wmEvent;
	PAINTSTRUCT ps;
	HDC hdc;
	TCHAR szHello[MAX_LOADSTRING];
	LoadString(hInst, IDS_HELLO, szHello, MAX_LOADSTRING);

	switch (message)
	{
	case WM_CREATE:
		hWinDC = GetWindowDC(hWnd);
		break;
	case WM_HSCROLL:
	{
		if ((HWND)lParam == hSlider)
		{
			currentContrastValue = SendMessage(hSlider, TBM_GETPOS, 0, 0);
			int contrast = currentContrastValue;

			// �����ı�
			char text[64];
			sprintf(text, "�Աȶȣ�%d", contrast);
			SetWindowText(hStaticContrastText, text);
			if (type == 0)
			{
				// ʵʱ����ͼ����ʾ
				AdjustContrast(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, contrast);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				AdjustContrastBMP(OrgImage, NewImage, ImageWidth, ImageHeight, contrast);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
		}
		else if ((HWND)lParam == hSlider1)
		{
			currentBrightnessValue = SendMessage(hSlider1, TBM_GETPOS, 0, 0);
			int brightness = currentBrightnessValue;

			// �����ı�
			char text[64];
			sprintf(text, "���ȣ�%d", brightness);
			SetWindowText(hStaticBrightnessText, text);
			if (type == 0)
			{
				// ʵʱ����ͼ����ʾ
				BrightnessChangeRAW(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, brightness);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				BrightnessChangeBMP(OrgImage, NewImage, ImageWidth, ImageHeight, brightness);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
		}
		else if ((HWND)lParam == hSlider2)
		{
			currentBlurValue = SendMessage(hSlider2, TBM_GETPOS, 0, 0);
			int Blur = currentBlurValue;

			// �����ı�
			char text[64];
			sprintf(text, "ģ���ȣ�%d", Blur);
			SetWindowText(hStaticBlurText, text);
			if (type == 0)
			{
				// ʵʱ����ͼ����ʾ
				GaussianBlurWithStrength(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, Blur);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				GaussianBlurWithStrengthBMP(OrgImage, NewImage, ImageWidth, ImageHeight, Blur);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}

		}
		else if ((HWND)lParam == hSlider3) {
			currentRotateValue = SendMessage(hSlider3, TBM_GETPOS, 0, 0);
			int r = currentRotateValue;

			// ���½Ƕ��ı�
			char text[64];
			sprintf(text, "��ת�Ƕȣ�%d", r);
			SetWindowText(hStaticRotateText, text);

			if (type == 0) {
				// ʼ�մ�ԭͼ������ת�������Ǵ�NewImage����һ����ת�����
				memcpy(temp, OrgImage, IMAGEWIDTH * IMAGEHEIGHT);
				// �Ƚ���ˮƽ��ת���ٽ�����ת
				if (shouldFlipHorizontal) {
					memcpy(temp1, temp, IMAGEWIDTH * IMAGEHEIGHT);
					FlipImageRAW(temp1, temp, IMAGEWIDTH, IMAGEHEIGHT);  // ˮƽ��ת
				}
				ImageRotation(temp, NewImage, IMAGEWIDTH, IMAGEHEIGHT, r);  // ��ת
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				memcpy(temp, OrgImage, ImageWidth * ImageHeight * 3);
				// �Ƚ���ˮƽ��ת���ٽ�����ת
				if (shouldFlipHorizontal) {
					memcpy(temp1, temp, ImageWidth * ImageHeight * 3);
					FlipImageBMP(temp1, temp, ImageWidth, ImageHeight);  // ˮƽ��ת
				}
				ImageRotationBMP(temp, NewImage, ImageWidth, ImageHeight, r);  // ��ת
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
		}


		else if ((HWND)lParam == hSlider4)
		{
			currentSharpenValue = SendMessage(hSlider4, TBM_GETPOS, 0, 0);
			int s = currentSharpenValue;

			// �����ı�
			char text[64];
			sprintf(text, "��ȣ�%d", s);
			SetWindowText(hStaticSharpenText, text);
			if (type == 0)
			{
				// ʵʱ����ͼ����ʾ
				Sharpen(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, s);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				SharpenBMP(OrgImage, NewImage, ImageWidth, ImageHeight, s);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
		}
		break;
	}

	case WM_COMMAND:
		wmId = LOWORD(wParam);
		wmEvent = HIWORD(wParam);
		DestroyAllDynamicControls();
		// Parse the menu selections:
		switch (wmId)
		{
			//------------------------------   �ԱȶȺ�������   ---------------------------------
		case 2001: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("contrast_output.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ contrast_output.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("contrast_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ contrast_output.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}

		case 2002: // ���ð�ť
		{
			currentContrastValue = 0;
			SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);
			SetWindowText(hStaticContrastText, "�Աȶȣ�1.00");
			if (type == 0)
			{
				AdjustContrast(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				AdjustContrastBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}

			SendMessage(hWnd, WM_COMMAND, IDM_18, 0);
			break;
		}
		//------------------------------   ���ȵ�������   ---------------------------------
		case 2003: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("brightness_output.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ brightness_output.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("brightness_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ brightness_output.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}
		case 2004: // ���ð�ť
		{
			currentBrightnessValue = 0; // �ָ�1.0
			SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);
			SetWindowText(hStaticBrightnessText, "���ȣ�0");
			if (type == 0)
			{
				BrightnessChangeRAW(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				BrightnessChangeBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_19, 0);
			break;
		}
		//------------------------------   ģ���ȵ�������   ---------------------------------
		case 2005: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("blur_output.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ blur_output.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("blur_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ blur_output.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}
		case 2006: // ���ð�ť
		{
			currentBlurValue = 0;
			SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);
			SetWindowText(hStaticBlurText, "ģ���ȣ�0");
			if (type == 0)
			{
				GaussianBlurWithStrength(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				GaussianBlurWithStrengthBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_20, 0);
			break;
		}
		//------------------------------   ��ת�ȵ�������   ---------------------------------
		case 2007: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("rotate_output.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ rotate_output.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("rotate_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ rotate_output.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}
		case 2008: // ���ð�ť
		{
			currentRotateValue = 0;  // ����Ϊ0��
			SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);
			SetWindowText(hStaticRotateText, "��ת�Ƕȣ�0");

			if (type == 0)
			{
				ImageRotation(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);  // ��ת0��
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1)
			{
				ImageRotationBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);  // ��ת0��
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_21, 0);
			break;
		}
		//------------------------------   ��ȵ�������   ---------------------------------
		case 2009: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("sharpen_output.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ sharpen_output.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("sharpen_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ sharpen_output.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}
		case 2010: // ���ð�ť
		{
			currentSharpenValue = 0; // �ָ�1.0
			SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);
			SetWindowText(hStaticSharpenText, "��ȣ�0");
			if (type == 0)
			{
				Sharpen(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				SharpenBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_22, 0);
			break;
		}
		case 2011: // ˮƽ��ת
		{
			if (type == 0) {
				memcpy(temp, NewImage, IMAGEWIDTH * IMAGEHEIGHT);
				FlipImageRAW(temp, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				memcpy(temp, NewImage, ImageWidth * ImageHeight * 3);
				FlipImageBMP(temp, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			// ���ñ�־����ʾ�������������ת֮ǰ��Ҫ��ת
			shouldFlipHorizontal = true;

			should = false;
			SendMessage(hWnd, WM_COMMAND, IDM_21, 0);  // ˢ����ʾ
			break;
		}
		//------------------------------   �����˺���   ---------------------------------
		case 2012: // ���水ť
		{
			if (type == 0)
			{
				// ����Ϊ .raw �ļ�
				FILE* fp = fopen("mosaic.raw", "wb");  // ����·�����Զ���
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ mosaic.raw��", "��ʾ", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "����ʧ�ܣ��޷����ļ���", "����", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("mosaic.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "ͼƬ�ѱ���Ϊ mosaic.bmp��", "��ʾ", MB_OK);
				}
				else {
					MessageBox(hWnd, "����ʧ�ܣ�", "����", MB_ICONERROR);
				}
			}
			break;
		}
		case 2013: // ���ð�ť
		{
			if (type == 0)
			{
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_25, 0);
			break;
		}
		case IDM_SHOWRAWIMAGE:
		{
			OpenImageFileDlg("��.Rawͼ���ļ�");
			ReadImage(ImgDlgFileName, OrgImage, IMAGEWIDTH, IMAGEHEIGHT);
			ShowImage(OrgImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS);
			break;
		}
		case IDM_SHOWBMPIMAGE:
		{
			OpenImageFileDlg("��.Bmpͼ���ļ�");
			ReadBmpImage(ImgDlgFileName, OrgImage);
			ShowBmpImage(OrgImage, ImageWidth, ImageHeight, XPOS, YPOS);
			break;
		}
		//------------------------------   ����紦��   ---------------------------------
		case IDM_15:
			if (type == 0)//.raw
			{
				SketchEffect(OrgImage, NewImage, IMAGEWIDTH, IMAGEWIDTH);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {//.bmp
				SketchEffectBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
			//------------------------------   ����紦��   ---------------------------------
		case IDM_16:
			if (type == 0)//.raw
			{
				EmbossEffect(OrgImage, NewImage, IMAGEWIDTH, IMAGEWIDTH);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {//.bmp
				EmbossEffectBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
			//------------------------------   ��ͨ�紦��   ---------------------------------
		case IDM_17:
			if (type == 0)//.raw
			{
				CartoonEffect(OrgImage, NewImage, IMAGEWIDTH, IMAGEWIDTH);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {//.bmp
				CartoonEffectBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
			//------------------------------   ����Աȶȴ���   ---------------------------------
		case IDM_18:
		{
			if (type == 0)
			{
				// ����
				hSlider = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN, SLIDER_MAX));
				SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);   // ��ʼֵ
				SendMessage(hSlider, TBM_SETTICFREQ, 25, 0);                     // ÿ��25��һ���̶���

				//3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider, TBM_SETPAGESIZE, 0, 1); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider, TBM_SETLINESIZE, 0, 1); // ��ͷ������ƶ�1��λ
				// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticContrastText = CreateWindow(
					"STATIC", "�Աȶȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2001, hInst, NULL);

				// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2002, hInst, NULL);

				// ������ʾͼ��
				int contrast = currentContrastValue;
				AdjustContrast(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, contrast);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				// ����
				hSlider = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN, SLIDER_MAX));
				SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);   // ��ʼֵ
				SendMessage(hSlider, TBM_SETTICFREQ, 25, 0);                     // ÿ��25��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider, TBM_SETPAGESIZE, 0, 1); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider, TBM_SETLINESIZE, 0, 1); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticContrastText = CreateWindow(
					"STATIC", "�Աȶȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2001, hInst, NULL);

				// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2002, hInst, NULL);

				// ������ʾͼ��
				int contrast = currentContrastValue;
				AdjustContrastBMP(OrgImage, NewImage, ImageWidth, ImageHeight, contrast);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   �������ȴ���   ---------------------------------
		case IDM_19:
		{
			if (type == 0)
			{
				//// ����
				hSlider1 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider1, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN1, SLIDER_MAX1));
				SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);   // ��ʼֵ
				SendMessage(hSlider1, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider1, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider1, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticBrightnessText = CreateWindow(
					"STATIC", "���ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2003, hInst, NULL);

				//// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2004, hInst, NULL);

				//// ������ʾͼ��
				int brightness = currentBrightnessValue;
				BrightnessChangeRAW(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, brightness);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				// ����
				hSlider1 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider1, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN1, SLIDER_MAX1));
				SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);   // ��ʼֵ
				SendMessage(hSlider1, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider1, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider1, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticBrightnessText = CreateWindow(
					"STATIC", "���ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2003, hInst, NULL);

				// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2004, hInst, NULL);

				// ������ʾͼ��
				int brightness = currentBrightnessValue;
				BrightnessChangeBMP(OrgImage, NewImage, ImageWidth, ImageHeight, brightness);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   ����ģ���ȴ���   ---------------------------------
		case IDM_20:
		{
			if (type == 0)
			{
				//// ����
				hSlider2 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider2, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN2, SLIDER_MAX2));
				SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);   // ��ʼֵ
				SendMessage(hSlider2, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider2, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider2, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticBlurText = CreateWindow(
					"STATIC", "ģ���ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2005, hInst, NULL);

				//// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2006, hInst, NULL);

				//// ������ʾͼ��
				int blur = currentBlurValue;
				GaussianBlurWithStrength(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, blur);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				//// ����
				hSlider2 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider2, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN2, SLIDER_MAX2));
				SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);   // ��ʼֵ
				SendMessage(hSlider2, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider2, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider2, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticBlurText = CreateWindow(
					"STATIC", "ģ���ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2005, hInst, NULL);

				//// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2006, hInst, NULL);

				//// ������ʾͼ��
				int blur = currentBlurValue;
				GaussianBlurWithStrengthBMP(OrgImage, NewImage, ImageWidth, ImageHeight, blur);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   ������ת����   ---------------------------------
		case IDM_21:
		{
			if (type == 0)
			{
				if (!hSlider3) // ��ֹ�ظ�����
				{
					//// ����
					hSlider3 = CreateWindowEx(
						0, TRACKBAR_CLASS, NULL,
						WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
						50, 480, 300, 30,  // X, Y, Width, Height
						hWnd, (HMENU)1001, hInst, NULL);

					//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
					SendMessage(hSlider3, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN3, SLIDER_MAX3));
					SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);   // ��ʼֵ
					SendMessage(hSlider3, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

					////3. �ؼ������û�����������ֹ���������񻬶���
					SendMessage(hSlider3, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
					SendMessage(hSlider3, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
					//// ��̬�ı�����ʾ��ǰ�Աȶ�
					hStaticRotateText = CreateWindow(
						"STATIC", "��ת�Ƕȣ�0",
						WS_CHILD | WS_VISIBLE,
						360, 480, 120, 25,
						hWnd, NULL, hInst, NULL);
					char buffer[64];
					sprintf(buffer, "��ת�Ƕȣ�%d", currentRotateValue);
					SetWindowText(hStaticRotateText, buffer);
					//// Ӧ�ð�ť
					hBtnApply = CreateWindow(
						"BUTTON", "����ͼƬ",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
						50, 520, 80, 30,
						hWnd, (HMENU)2007, hInst, NULL);

					//// ���ð�ť
					hBtnReset = CreateWindow(
						"BUTTON", "����",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						150, 520, 80, 30,
						hWnd, (HMENU)2008, hInst, NULL);

					hBtnFlip = CreateWindow(//ˮƽ��ת
						"BUTTON", "����",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						250, 520, 80, 30,
						hWnd, (HMENU)2011, hInst, NULL);
				}
				if (should)
				{
					//// ������ʾͼ��
					int r = currentRotateValue;
					ImageRotation(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, r);
				}
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);

			}
			else if (type == 1) {
				if (!hSlider3) // ��ֹ�ظ�����
				{
					//// ����
					hSlider3 = CreateWindowEx(
						0, TRACKBAR_CLASS, NULL,
						WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
						50, 480, 300, 30,  // X, Y, Width, Height
						hWnd, (HMENU)1001, hInst, NULL);

					//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
					SendMessage(hSlider3, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN3, SLIDER_MAX3));
					SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);   // ��ʼֵ
					SendMessage(hSlider3, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

					////3. �ؼ������û�����������ֹ���������񻬶���
					SendMessage(hSlider3, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
					SendMessage(hSlider3, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
					//// ��̬�ı�����ʾ��ǰ�Աȶ�
					hStaticRotateText = CreateWindow(
						"STATIC", "��ת�Ƕȣ�0",
						WS_CHILD | WS_VISIBLE,
						360, 480, 120, 25,
						hWnd, NULL, hInst, NULL);
					char buffer[64];
					sprintf(buffer, "��ת�Ƕȣ�%d", currentRotateValue);
					SetWindowText(hStaticRotateText, buffer);
					//// Ӧ�ð�ť
					hBtnApply = CreateWindow(
						"BUTTON", "����ͼƬ",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
						50, 520, 80, 30,
						hWnd, (HMENU)2007, hInst, NULL);

					//// ���ð�ť
					hBtnReset = CreateWindow(
						"BUTTON", "����",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						150, 520, 80, 30,
						hWnd, (HMENU)2008, hInst, NULL);
					hBtnFlip = CreateWindow(//ˮƽ��ת
						"BUTTON", "����",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						250, 520, 80, 30,
						hWnd, (HMENU)2011, hInst, NULL);
				}
				if (should)
				{
					//// ������ʾͼ��
					int r = currentRotateValue;
					ImageRotationBMP(OrgImage, NewImage, ImageWidth, ImageHeight, r);
				}
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);

			}
			break;
		}
		//------------------------------   �����񻯴���   ---------------------------------
		case IDM_22:
		{
			if (type == 0)
			{
				//// ����
				hSlider4 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider4, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN4, SLIDER_MAX4));
				SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);   // ��ʼֵ
				SendMessage(hSlider4, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider4, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider4, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticSharpenText = CreateWindow(
					"STATIC", "��ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// Ӧ�ð�ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2007, hInst, NULL);

				//// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2008, hInst, NULL);

				//// ������ʾͼ��
				int s = currentSharpenValue;
				Sharpen(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, s);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				//// ����
				hSlider4 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. ���û��鷶Χ����ʼֵ���̶�Ƶ��
				SendMessage(hSlider4, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN4, SLIDER_MAX4));
				SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);   // ��ʼֵ
				SendMessage(hSlider4, TBM_SETTICFREQ, 10, 0);                     // ÿ��1��һ���̶���

				////3. �ؼ������û�����������ֹ���������񻬶���
				SendMessage(hSlider4, TBM_SETPAGESIZE, 0, 2); // ҳ�ƶ�����������ۣ�ʱ�ƶ�1��λ
				SendMessage(hSlider4, TBM_SETLINESIZE, 0, 2); // ��ͷ������ƶ�1��λ
				//// ��̬�ı�����ʾ��ǰ�Աȶ�
				hStaticSharpenText = CreateWindow(
					"STATIC", "��ȣ�0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// ���水ť
				hBtnApply = CreateWindow(
					"BUTTON", "����ͼƬ",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2007, hInst, NULL);

				//// ���ð�ť
				hBtnReset = CreateWindow(
					"BUTTON", "����",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2008, hInst, NULL);

				//// ������ʾͼ��
				int s = currentSharpenValue;
				SharpenBMP(OrgImage, NewImage, ImageWidth, ImageHeight, s);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------  ��ɫ������   ---------------------------------
		case IDM_23:
			if (type == 0)//.raw
			{
				MessageBox(hWnd, ".Raw�Ҷ�ͼû����ɫͨ��", "��ʾ", MB_OK);
			}
			else if (type == 1) {//.bmp
				ApplyCoolToneBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		case IDM_24:
			if (type == 0)//.raw
			{
				MessageBox(hWnd, ".Raw�Ҷ�ͼû����ɫͨ��", "��ʾ", MB_OK);
			}
			else if (type == 1) {//.bmp
				ApplyWarmToneBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		case IDM_25:
		{
			isSelectingMosaic = true;     // ����������ģʽ
			isFirstClick = true;          // ��һ�ε��Ϊ��һ����
			MessageBox(hWnd, "����ͼ���ϵ�������㣬ѡ������������", "��ʾ", MB_OK);
			//// Ӧ�ð�ť
			hBtnApply = CreateWindow(
				"BUTTON", "����ͼƬ",
				WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
				50, 520, 80, 30,
				hWnd, (HMENU)2012, hInst, NULL);

			//// ���ð�ť
			hBtnReset = CreateWindow(
				"BUTTON", "����",
				WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
				150, 520, 80, 30,
				hWnd, (HMENU)2013, hInst, NULL);
			if (type == 0)
				ShowImage(OrgImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			else
				ShowBmpImage(OrgImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
		}
		break;
		case IDM_ABOUT:
			DialogBox(hInst, (LPCTSTR)IDD_ABOUTBOX, hWnd, (DLGPROC)About);
			break;
		case IDM_EXIT:
			DestroyWindow(hWnd);
			break;
		default:
			return DefWindowProc(hWnd, message, wParam, lParam);
		}
		break;
	case WM_LBUTTONDOWN:
		if (isSelectingMosaic) {
			int mx = LOWORD(lParam);
			int my = HIWORD(lParam);

			// ת����ͼ��������
			int imgX = mx - 100;
			int imgY = my - 50;
			if(type==0)
			{
				// ��֤������ͼ��Χ��
				if (imgX >= 0 && imgX < IMAGEWIDTH && imgY >= 0 && imgY < IMAGEHEIGHT) {
					if (isFirstClick) {
						ptMosaic1.x = imgX;
						ptMosaic1.y = imgY;
						isFirstClick = false;
					}
					else {
						ptMosaic2.x = imgX;
						ptMosaic2.y = imgY;
						// ���������˺���
						ApplyMosaic(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT,
							ptMosaic1.x, ptMosaic1.y,
							ptMosaic2.x, ptMosaic2.y, 8);
						ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);

						isSelectingMosaic = false;
						isFirstClick = true;
					}
				}
			}
			else if (type == 1)
			{
				// ��֤������ͼ��Χ��
				if (imgX >= 0 && imgX < ImageWidth && imgY >= 0 && imgY < ImageHeight) {
					if (isFirstClick) {
						ptMosaic1.x = imgX;
						ptMosaic1.y = imgY;
						isFirstClick = false;
					}
					else {
						ptMosaic2.x = imgX;
						ptMosaic2.y = imgY;
						ApplyMosaicBMP(OrgImage, NewImage, ImageWidth, ImageHeight,
							ptMosaic1.x, ptMosaic1.y,
							ptMosaic2.x, ptMosaic2.y, 10);
						ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
						isSelectingMosaic = false;
						isFirstClick = true;
					}
				}
			}
		}
		break;
	case WM_PAINT:
		hdc = BeginPaint(hWnd, &ps);
		// TODO: Add any drawing code here...
		RECT rt;
		GetClientRect(hWnd, &rt);
		DrawText(hdc, szHello, strlen(szHello), &rt, DT_CENTER);
		EndPaint(hWnd, &ps);
		break;
	case WM_DESTROY:
		PostQuitMessage(0);
		break;
	default:
		return DefWindowProc(hWnd, message, wParam, lParam);
	}
	return 0;
}

// Mesage handler for about box.
LRESULT CALLBACK About(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
	switch (message)
	{
	case WM_INITDIALOG:
		return TRUE;

	case WM_COMMAND:
		if (LOWORD(wParam) == IDOK || LOWORD(wParam) == IDCANCEL)
		{
			EndDialog(hDlg, LOWORD(wParam));
			return TRUE;
		}
		break;
	}
	return FALSE;
}

/************************************************************************************************
*																								*
*   ���޸�ʽRAWͼ���ļ�																			*
*																								*
************************************************************************************************/
BOOL ReadImage(LPSTR ImageFileName, char* oImage, int wImage, int hImage) //��ȡͼ����Ϣ��������Image[][]��
{
	type = 0;
	OFSTRUCT of;
	HFILE Image_fp;

	Image_fp = OpenFile(ImageFileName, &of, OF_READ);
	if (Image_fp == HFILE_ERROR)
	{
		MessageBox(NULL, ImageFileName, "���ļ�������Ϣ", MB_OK);
		return FALSE;
	}

	_lread(Image_fp, oImage, wImage * hImage);
	_lclose(Image_fp);

	return TRUE;
}
/************************************************************************************************
*																								*
*   ��ʾRAWͼ��																					*
*																								*
************************************************************************************************/
void ShowImage(char* Image, int wImage, int hImage, int xPos, int yPos)
{
	int i, j;

	for (i = 0; i < hImage; i++) {
		for (j = 0; j < wImage; j++) {
			SetPixel(hWinDC, j + yPos, i + xPos, RGB(Image[i * wImage + j], Image[i * wImage + j], Image[i * wImage + j]));
		}
	}
}
/************************************************************************************************
*																								*
*   ��BMPͼ���У�����ͼ��ͷ��Ϣ����Ҫ����ͼ�񳤶ȺͿ��											*
*																								*
************************************************************************************************/
BOOL ReadBmpImage(LPSTR ImageFileName, char* oImage)
{
	type = 1;
	BITMAPFILEHEADER bfImage;
	BITMAPINFOHEADER biImage;

	OFSTRUCT of;
	HFILE Image_fp;

	Image_fp = OpenFile(ImageFileName, &of, OF_READ);
	if (Image_fp == HFILE_ERROR)
	{
		MessageBox(NULL, ImageFileName, "���ļ�������Ϣ", MB_OK);
		return FALSE;
	}

	_llseek(Image_fp, 0, 0);
	_lread(Image_fp, &bfImage, sizeof(BITMAPFILEHEADER));

	if ((bfImage.bfType != 0x4d42)) {		// "BM"
		MessageBox(NULL, NULL, "��bmp�ļ�������Ϣ", MB_OK);
		return FALSE;
	}

	_lread(Image_fp, &biImage, sizeof(BITMAPINFOHEADER));

	ImageWidth = biImage.biWidth;
	ImageHeight = biImage.biHeight;
	if (biImage.biBitCount != 24) {		// 24λ��ɫͼ��
		MessageBox(NULL, NULL, "����24λbmpͼ��", MB_OK);
		return FALSE;
	}

	_llseek(Image_fp, bfImage.bfOffBits, 0);
	_lread(Image_fp, oImage, biImage.biWidth * biImage.biHeight * 3);
	_lclose(Image_fp);

	return TRUE;
}
/************************************************************************************************
*																								*
*   ��ʾBMPͼ��																					*
*																								*
************************************************************************************************/
void ShowBmpImage(char* Image, int wImage, int hImage, int xPos, int yPos)
{
	BITMAPINFO bmi;
	memset(&bmi, 0, sizeof(BITMAPINFO));
	bmi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
	bmi.bmiHeader.biWidth = wImage;
	bmi.bmiHeader.biHeight = hImage;
	bmi.bmiHeader.biPlanes = 1;
	bmi.bmiHeader.biBitCount = 24;
	bmi.bmiHeader.biCompression = BI_RGB;

	SetDIBitsToDevice(hWinDC, xPos, yPos, wImage, hImage, 0, 0, 0, hImage, Image, &bmi, DIB_RGB_COLORS);
}
/************************************************************************************************
*																								*
*   ����BMPͼ��																					*
*																								*
************************************************************************************************/
BOOL SaveBmpImage(LPSTR filename, char* imageData, int width, int height)
{
	BITMAPFILEHEADER bfh;
	BITMAPINFOHEADER bih;

	int bytesPerPixel = 3;
	int paddingSize = (4 - (width * bytesPerPixel) % 4) % 4;
	int stride = width * bytesPerPixel + paddingSize;
	int imageSize = stride * height;

	// ��д�ļ�ͷ
	bfh.bfType = 0x4D42;  // 'BM'
	bfh.bfSize = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER) + imageSize;
	bfh.bfReserved1 = 0;
	bfh.bfReserved2 = 0;
	bfh.bfOffBits = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER);

	// ��д��Ϣͷ
	bih.biSize = sizeof(BITMAPINFOHEADER);
	bih.biWidth = width;
	bih.biHeight = -height;  // ע����������ֵ����ʾ���µ���
	bih.biPlanes = 1;
	bih.biBitCount = 24;
	bih.biCompression = BI_RGB;
	bih.biSizeImage = imageSize;
	bih.biXPelsPerMeter = 0;
	bih.biYPelsPerMeter = 0;
	bih.biClrUsed = 0;
	bih.biClrImportant = 0;

	// ���ļ�
	OFSTRUCT of;
	HFILE hFile = OpenFile(filename, &of, OF_CREATE | OF_WRITE);
	if (hFile == HFILE_ERROR) {
		MessageBox(NULL, filename, "�޷������ļ�", MB_ICONERROR);
		return FALSE;
	}

	// д�� BMP �ļ�ͷ����Ϣͷ
	_lwrite(hFile, (LPCSTR)&bfh, sizeof(BITMAPFILEHEADER));
	_lwrite(hFile, (LPCSTR)&bih, sizeof(BITMAPINFOHEADER));

	// д���������ݣ�����д��ע�����䣩
	for (int y = height - 1; y >= 0; y--) {
		for (int x = 0; x < width; x++) {
			int index = (y * width + x) * 3;
			_lwrite(hFile, &imageData[index], 3);
		}
		// д��ÿ�е� padding����0��
		for (int p = 0; p < paddingSize; p++) {
			BYTE zero = 0;
			_lwrite(hFile, (LPCSTR)&zero, 1);
		}
	}

	_lclose(hFile);
	MessageBox(NULL, "BMPͼ�񱣴�ɹ���", "��ʾ", MB_OK);
	return TRUE;
}
/************************************************************************************************
*																								*
*   �򿪶��ļ���ϵͳ�Ի���																		*
*																								*
************************************************************************************************/
void OpenImageFileDlg(char* OPDLTitle)
{
	char FileTitle[100];
	OPENFILENAME ofn;

	memset(&ofn, 0, sizeof(ofn));
	ofn.lStructSize = sizeof(OPENFILENAME);
	ofn.hwndOwner = NULL;
	ofn.hInstance = NULL;
	ofn.lpstrFilter = TEXT("raw files\0*.raw\0All File\0*.*\0\0");
	ofn.lpstrCustomFilter = NULL;
	ofn.nMaxCustFilter = 0;
	ofn.nFilterIndex = 1;
	ofn.lpstrFile = ImgDlgFileName;
	ofn.nMaxFile = MAX_PATH;
	ofn.lpstrFileTitle = FileTitle;
	ofn.nMaxFileTitle = 99;
	ofn.lpstrInitialDir = ImgDlgFileDir;
	ofn.lpstrTitle = OPDLTitle;
	ofn.Flags = OFN_FILEMUSTEXIST;
	ofn.lpstrDefExt = "raw";
	ofn.lCustData = NULL;
	ofn.lpfnHook = NULL;
	ofn.lpTemplateName = NULL;
	ImgDlgFileName[0] = '\0';
	GetOpenFileName(&ofn);

	getcwd(ImgDlgFileDir, MAX_PATH);
}

//--------------------------------      Debug      ---------------------------------------
//void SaveImageToTxt(const char* filename, char* nImage, int wImage, int hImage)
//{
//	FILE* fp = fopen(filename, "w");
//	if (!fp)
//	{
//		MessageBox(NULL, "�޷���������ļ�", "����", MB_OK);
//		return;
//	}
//
//	int i, j, index;
//	for (j = 0; j < hImage; j++)
//	{
//		for (i = 0; i < wImage; i++)
//		{
//			index = (j * wImage + i) * 3;
//			BYTE B = (BYTE)nImage[index];
//			BYTE G = (BYTE)nImage[index + 1];
//			BYTE R = (BYTE)nImage[index + 2];
//
//			fprintf(fp, "(%3d,%3d,%3d) ", R, G, B);  // �� RGB ˳��д��
//		}
//		fprintf(fp, "\n");
//	}
//
//	fclose(fp);
//}
void SaveImageToTxt(const char* filename, char* nImage, int wImage, int hImage)
{
	FILE* fp = fopen(filename, "w");
	if (!fp)
	{
		MessageBox(NULL, "�޷���������ļ�", "����", MB_OK);
		return;
	}

	// ����ͼ���ÿһ�����أ������Ҷ�ֵ������ı��ļ�
	for (int j = 0; j < hImage; j++)
	{
		for (int i = 0; i < wImage; i++)
		{
			int index = j * wImage + i;  // ��ȡ��ǰ���ص�����
			BYTE grayValue = (BYTE)nImage[index];  // ��ȡ�Ҷ�ֵ

			fprintf(fp, "%3d ", grayValue);  // ���Ҷ�ֵд���ı��ļ�
		}
		fprintf(fp, "\n");
	}

	fclose(fp);
}

/************************************************************************************************
*																								*
*   ͼ��򵥼��α任����              															*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void SimpleGeometricTranslation(char* oImage, char* nImage, int wImage, int hImage,
	double* sgt_Array)
{
	double ox, oy;		int i, nx, ny, x0, y0;
	for (i = 0; i < wImage * hImage; i++)
		nImage[i] = 0;		  //�����ͼ��
	for (ny = 0; ny < hImage; ny++) {//Ŀ��ͼ���ÿ�����ص� (nx, ny)
		for (nx = 0; nx < wImage; nx++) {
			x0 = nx - wImage / 2;				  //��ͼ������Ϊԭ��
			y0 = ny - hImage / 2;
			ox = sgt_Array[0] * (double)x0 + sgt_Array[1] * (double)x0 + sgt_Array[2];
			oy = sgt_Array[3] * (double)y0 + sgt_Array[4] * (double)y0 + sgt_Array[5];
			ox += wImage / 2;				  //�ָ�ͼ��ԭ��λ��
			oy += hImage / 2;
			if ((ox < 0.0) || (ox >= wImage - 1) || (oy < 0.0) || (oy >= hImage - 1))
				nImage[ny * wImage + nx] = 0;			  //������Χ������0
			else
				nImage[ny * wImage + nx] = oImage[((int)oy) * wImage + (int)ox];//y*width+x����Ŀ������
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void SimpleGeometricTranslationBMP(char* oImage, char* nImage, int wImage, int hImage, double* sgt_Array)
{
	int sx, sy, ox, oy;
	double axy, bxy;

	// �����ͼ��ȫ�ڣ�
	for (int i = 0; i < wImage * hImage * 3; i++) nImage[i] = 0;

	for (sy = 0; sy < hImage; sy++) {
		for (sx = 0; sx < wImage; sx++) {
			ox = sx - wImage / 2;
			oy = sy - hImage / 2;

			axy = sgt_Array[0] * ox + sgt_Array[1] * oy + sgt_Array[2];
			bxy = sgt_Array[3] * ox + sgt_Array[4] * oy + sgt_Array[5];

			axy += wImage / 2;
			bxy += hImage / 2;

			if (axy >= 0 && axy < wImage && bxy >= 0 && bxy < hImage) {
				int srcIndex = ((int)bxy * wImage + (int)axy) * 3;
				int dstIndex = (sy * wImage + sx) * 3;

				nImage[dstIndex] = oImage[srcIndex];         // B
				nImage[dstIndex + 1] = oImage[srcIndex + 1]; // G
				nImage[dstIndex + 2] = oImage[srcIndex + 2]; // R
			}
		}
	}
}
/************************************************************************************************
*																								*
*   ͼ����ת               																		*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void ImageRotation(char* oImage, char* nImage, int wImage, int hImage,
	double iAngle)
{
	double pi = 3.141592653589793;
	double gt_Array[9] = { 0, 0, 0,
				 0, 0, 0,
				 0, 0, 1 };
	iAngle = (iAngle / 360) * 2 * pi;
	gt_Array[0] = cos(iAngle);
	gt_Array[1] = -sin(iAngle);
	gt_Array[3] = sin(iAngle);
	gt_Array[4] = cos(iAngle);

	SimpleGeometricTranslation(oImage, nImage, wImage, hImage, gt_Array);
}
//------------------------------   .bmp   ---------------------------------
void ImageRotationBMP(char* oImage, char* nImage, int wImage, int hImage, double iAngle)
{
	double pi = 3.141592653589793;
	double gt_Array[9] = {
		0, 0, 0,
		0, 0, 0,
		0, 0, 1
	};

	double radians = iAngle * pi / 180.0;  // �Ƕ�ת����

	// ������ת����
	gt_Array[0] = cos(radians);   // cos��
	gt_Array[1] = -sin(radians);  // -sin��
	gt_Array[3] = sin(radians);   // sin��
	gt_Array[4] = cos(radians);   // cos��

	SimpleGeometricTranslationBMP(oImage, nImage, wImage, hImage, gt_Array);
}
/************************************************************************************************
*																								*
*  �����ԱȶȺ���		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void AdjustContrast(char* oImage, char* nImage, int wImage, int hImage, int contrast)
{
	// ӳ��Աȶ�ֵ������ϵ����contrast �� [-50, 50] �� factor �� [0.5, 1.5]
	float factor = 1.0f + (contrast / 100.0f);  // -50 �� 0.5��0 �� 1.0��50 �� 1.5

	int size = wImage * hImage;

	for (int i = 0; i < size; ++i)
	{
		int pixel = (unsigned char)oImage[i];

		int new_pixel = static_cast<int>((pixel - 128) * factor + 128);

		if (new_pixel < 0) new_pixel = 0;
		if (new_pixel > 255) new_pixel = 255;

		nImage[i] = static_cast<char>(new_pixel);
	}
}

//------------------------------   .bmp   ---------------------------------
void AdjustContrastBMP(char* oImage, char* nImage, int wImage, int hImage, int contrast)
{
	float factor = 1.0f + (contrast / 100.0f);
	int size = wImage * hImage * 3;  // ÿ�������� R, G, B ��3�ֽ�

	for (int i = 0; i < size; i += 3)
	{
		for (int c = 0; c < 3; ++c)  // ���� R��G��B ����
		{
			int pixel = (unsigned char)oImage[i + c];  // ��ȡԭʼ����ֵ
			int new_pixel = static_cast<int>((pixel - 128) * factor + 128);  // �Աȶȱ任

			// ���Ʒ�Χ [0, 255]
			if (new_pixel < 0) new_pixel = 0;
			if (new_pixel > 255) new_pixel = 255;

			nImage[i + c] = static_cast<char>(new_pixel);  // д����ͼ��
		}
	}
}
/************************************************************************************************
*																								*
*  ���ȵ������� 		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void BrightnessChangeRAW(char* oImage, char* nImage, int wImage, int hImage, int brightness)
{
	int size = wImage * hImage;
	for (int i = 0; i < size; ++i)
	{
		int pixel = (unsigned char)oImage[i];
		int new_pixel = pixel + brightness;

		if (new_pixel > 255) new_pixel = 255;
		if (new_pixel < 0) new_pixel = 0;

		nImage[i] = static_cast<char>(new_pixel);
	}
}
//------------------------------   .bmp   ---------------------------------
void BrightnessChangeBMP(char* oImage, char* nImage, int wImage, int hImage, int brightness)
{
	int size = wImage * hImage * 3; // 24λͼ��ÿ����3�ֽڣ�BGR

	for (int i = 0; i < size; i += 3)
	{
		// �ֱ��� BGR ��ͨ��
		for (int j = 0; j < 3; ++j)
		{
			int value = (unsigned char)oImage[i + j];
			int new_value = value + brightness;

			if (new_value > 255) new_value = 255;
			if (new_value < 0) new_value = 0;

			nImage[i + j] = static_cast<char>(new_value);
		}
	}
}
/************************************************************************************************
*																								*
*  ��ȵ������� 		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void Sharpen(char* oImage, char* nImage, int wImage, int hImage, int sharpenness)
{
	// ������ֵ [0, 100] ӳ�䵽�ں�����Ȩ�� [4, 10]
	float centerWeight = 1.0f + (sharpenness / 25.0f) * 1.5f;
	float edgeWeight = (centerWeight - 1.0f) / 4.0f;

	float kernel[3][3] = {
		{  0.0f,      -edgeWeight,  0.0f },
		{ -edgeWeight, centerWeight, -edgeWeight },
		{  0.0f,      -edgeWeight,  0.0f }
	};
	int kernelSize = 3;
	int pad = kernelSize / 2;

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			int sum = 0;

			for (int ky = -pad; ky <= pad; ky++) {
				for (int kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;

					// ����߽紦��
					if (px < 0) px = -px;
					if (py < 0) py = -py;
					if (px >= wImage)  px = 2 * wImage - px - 1;
					if (py >= hImage)  py = 2 * hImage - py - 1;

					unsigned char pixel = (unsigned char)oImage[py * wImage + px];
					sum += pixel * kernel[ky + pad][kx + pad];
				}
			}

			// �ضϵ� 0~255
			if (sum < 0) sum = 0;
			if (sum > 255) sum = 255;

			nImage[y * wImage + x] = (char)sum;
		}
	}
}

//------------------------------   .bmp   ---------------------------------
void SharpenBMP(char* oImage, char* nImage, int wImage, int hImage, int sharpenness)
{
	// ������ֵ [0, 100] ӳ�䵽�ں�����Ȩ�� [4, 10]
	float centerWeight = 1.0f + (sharpenness / 25.0f) * 1.5f;
	float edgeWeight = (centerWeight - 1.0f) / 4.0f;

	float kernel[3][3] = {
		{  0.0f,      -edgeWeight,  0.0f },
		{ -edgeWeight, centerWeight, -edgeWeight },
		{  0.0f,      -edgeWeight,  0.0f }
	};

	int kernelSize = 3;
	int pad = kernelSize / 2;

	// ÿ���ֽ���������4�ı�����BMP��ʽҪ��
	int bytesPerPixel = 3;
	int rowSize = (wImage * bytesPerPixel + 3) / 4 * 4;

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			for (int c = 0; c < 3; c++) { // ����B, G, R��ͨ��
				int sum = 0;

				for (int ky = -pad; ky <= pad; ky++) {
					for (int kx = -pad; kx <= pad; kx++) {
						int px = x + kx;
						int py = y + ky;

						// ����߽紦��
						if (px < 0) px = -px;
						if (py < 0) py = -py;
						if (px >= wImage)  px = 2 * wImage - px - 1;
						if (py >= hImage)  py = 2 * hImage - py - 1;

						unsigned char pixel = (unsigned char)oImage[py * rowSize + px * 3 + c];
						sum += pixel * kernel[ky + pad][kx + pad];
					}
				}

				// �ü���Χ��0~255
				if (sum < 0) sum = 0;
				if (sum > 255) sum = 255;

				nImage[y * rowSize + x * 3 + c] = (char)sum;
			}
		}
	}
}
/************************************************************************************************
*																								*
*  ��ת���� 		            	                 											*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void FlipImageRAW(char* srcImage, char* dstImage, int width, int height)
{
	for (int y = 0; y < height; ++y) {
		for (int x = 0; x < width; ++x) {
			dstImage[y * width + x] = srcImage[y * width + (width - 1 - x)];
		}
	}

}
//------------------------------   .bmp   ---------------------------------
void FlipImageBMP(char* srcImage, char* dstImage, int width, int height)
{
	const int bytesPerPixel = 3;

	for (int y = 0; y < height; ++y)
	{
		for (int x = 0; x < width; ++x)
		{
			int srcIndex = (y * width + x) * bytesPerPixel;
			int dstIndex = (y * width + (width - 1 - x)) * bytesPerPixel;

			dstImage[dstIndex] = srcImage[srcIndex];
			dstImage[dstIndex + 1] = srcImage[srcIndex + 1];
			dstImage[dstIndex + 2] = srcImage[srcIndex + 2];
		}
	}

}
/************************************************************************************************
*																								*
*  ģ�����������ڸ�˹�˲�          	                 											*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void GaussianBlurWithStrength(char* oImage, char* nImage, int wImage, int hImage, int strength)
{
	// 3x3 ��˹��
	int kernel[3][3] = {
		{ 1, 2, 1 },
		{ 2, 4, 2 },
		{ 1, 2, 1 }
	};
	int kernelSize = 3;
	int kernelSum = 16;
	int pad = 1;

	// �� strength �� [0, 100] ӳ�䵽 blend �� [0.0, 1.0]
	float blend = strength / 50.0f;

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			float blurSum = 0.0f;

			for (int ky = -pad; ky <= pad; ky++) {
				for (int kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;

					// �߽羵����
					if (px < 0) px = -px;
					if (py < 0) py = -py;
					if (px >= wImage) px = 2 * wImage - px - 1;
					if (py >= hImage) py = 2 * hImage - py - 1;

					unsigned char pixel = (unsigned char)oImage[py * wImage + px];
					blurSum += pixel * kernel[ky + pad][kx + pad];
				}
			}

			// �õ���˹ģ������ֵ
			blurSum /= kernelSum;

			// ��ǰ����ԭʼֵ
			unsigned char original = (unsigned char)oImage[y * wImage + x];

			// ��ֵ����� = ԭͼ * (1 - blend) + ģ�� * blend
			float finalVal = (1.0f - blend) * original + blend * blurSum;

			if (finalVal < 0) finalVal = 0;
			if (finalVal > 255) finalVal = 255;

			nImage[y * wImage + x] = (unsigned char)(finalVal + 0.5f); // ��������
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void GaussianBlurWithStrengthBMP(char* oImage, char* nImage, int wImage, int hImage, int strength)
{
	// ��˹�ˣ�3x3��
	int kernel[3][3] = {
		{ 1, 2, 1 },
		{ 2, 4, 2 },
		{ 1, 2, 1 }
	};
	int kernelSize = 3;
	int kernelSum = 16;
	int pad = 1;

	float blend = strength / 50.0f;

	int lineBytes = wImage * 3; // ÿ�����������ֽ���

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			for (int c = 0; c < 3; c++) { // B, G, R ͨ��

				float blurSum = 0.0f;

				for (int ky = -pad; ky <= pad; ky++) {
					for (int kx = -pad; kx <= pad; kx++) {
						int px = x + kx;
						int py = y + ky;

						// �߽羵����
						if (px < 0) px = -px;
						if (py < 0) py = -py;
						if (px >= wImage)  px = 2 * wImage - px - 1;
						if (py >= hImage) py = 2 * hImage - py - 1;

						int srcIdx = (py * wImage + px) * 3 + c;
						blurSum += (unsigned char)oImage[srcIdx] *
							kernel[ky + pad][kx + pad];
					}
				}

				blurSum /= kernelSum;

				int srcIdx = (y * wImage + x) * 3 + c;
				unsigned char original = (unsigned char)oImage[srcIdx];

				float finalVal = (1.0f - blend) * original + blend * blurSum;

				if (finalVal < 0) finalVal = 0;
				if (finalVal > 255) finalVal = 255;

				nImage[srcIdx] = (unsigned char)(finalVal + 0.5f);
			}
		}
	}
}

/************************************************************************************************
*																								*
*  ���ط������		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void SketchEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int sobelX[3][3] = { { -1, 0, 1 }, { -2, 0, 2 }, { -1, 0, 1 } };
	int sobelY[3][3] = { { -1, -2, -1 }, { 0, 0, 0 }, { 1, 2, 1 } };
	int pad = 1; // Sobel�˴�СΪ3x3��padΪ1
	int y, x, ky, kx;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int gradX = 0, gradY = 0;

			// �������
			for (ky = -pad; ky <= pad; ky++) {
				for (kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;
					unsigned char* pixel = (unsigned char*)&oImage[(py * wImage + px) * 3];
					int gray = (pixel[0] + pixel[1] + pixel[2]) / 3;

					gradX += gray * sobelX[ky + pad][kx + pad];
					gradY += gray * sobelY[ky + pad][kx + pad];
				}
			}

			// �����ݶȴ�С
			int gradient = sqrt(gradX * gradX + gradY * gradY);
			gradient = min(255, max(0, gradient));

			// ���Ϊ��תͼ��
			unsigned char* outputPixel = (unsigned char*)&nImage[(y * wImage + x) * 3];
			outputPixel[0] = outputPixel[1] = outputPixel[2] = 255 - gradient;
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void SketchEffectBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int sobelX[3][3] = { { -1, 0, 1 }, { -2, 0, 2 }, { -1, 0, 1 } };
	int sobelY[3][3] = { { -1, -2, -1 }, { 0, 0, 0 }, { 1, 2, 1 } };
	int pad = 1;
	int y, x, kx, ky;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int gradX = 0, gradY = 0;

			// ����������Ҷ� + Sobel��
			for (ky = -pad; ky <= pad; ky++) {
				for (kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;
					int index = (py * wImage + px) * 3;

					unsigned char b = (unsigned char)oImage[index];
					unsigned char g = (unsigned char)oImage[index + 1];
					unsigned char r = (unsigned char)oImage[index + 2];

					int gray = (r + g + b) / 3;

					gradX += gray * sobelX[ky + pad][kx + pad];
					gradY += gray * sobelY[ky + pad][kx + pad];
				}
			}

			// �ݶȷ�ֵ
			int grad = (int)sqrt((double)(gradX * gradX + gradY * gradY));
			grad = grad > 255 ? 255 : (grad < 0 ? 0 : grad);

			// ��ת��ɫ�������񣨺��߰׵ף�
			unsigned char sketch = 255 - grad;
			int idx = (y * wImage + x) * 3;
			nImage[idx] = sketch; // B
			nImage[idx + 1] = sketch; // G
			nImage[idx + 2] = sketch; // R
		}
	}
}
/************************************************************************************************
*																								*
*  ����������		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void EmbossEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int embossKernel[3][3] = { { -2, -1, 0 }, { -1, 1, 1 }, { 0, 1, 2 } };
	int pad = 1;  // �˴�СΪ3x3
	int y, x, ky, kx;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int resultR = 0, resultG = 0, resultB = 0;

			// �������
			for (ky = -pad; ky <= pad; ky++) {
				for (kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;
					unsigned char* pixel = (unsigned char*)&oImage[(py * wImage + px) * 3];

					resultR += pixel[0] * embossKernel[ky + pad][kx + pad];
					resultG += pixel[1] * embossKernel[ky + pad][kx + pad];
					resultB += pixel[2] * embossKernel[ky + pad][kx + pad];
				}
			}

			// ��ǿ�ԱȶȺ����÷�Χ
			resultR = min(255, max(0, resultR + 128));
			resultG = min(255, max(0, resultG + 128));
			resultB = min(255, max(0, resultB + 128));

			unsigned char* outputPixel = (unsigned char*)&nImage[(y * wImage + x) * 3];
			outputPixel[0] = resultR;
			outputPixel[1] = resultG;
			outputPixel[2] = resultB;
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void EmbossEffectBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int embossKernel[3][3] = { { -2, -1, 0 }, { -1, 1, 1 }, { 0, 1, 2 } };
	int pad = 1;
	int y, x, kx, ky;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int resultR = 0, resultG = 0, resultB = 0;

			for (ky = -pad; ky <= pad; ky++) {
				for (kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;
					int index = (py * wImage + px) * 3;

					unsigned char B = (unsigned char)oImage[index];
					unsigned char G = (unsigned char)oImage[index + 1];
					unsigned char R = (unsigned char)oImage[index + 2];

					int k = embossKernel[ky + pad][kx + pad];

					resultB += B * k;
					resultG += G * k;
					resultR += R * k;
				}
			}

			// ���ƫ���������ȣ������� [0,255]
			resultB = min(255, max(0, resultB + 128));
			resultG = min(255, max(0, resultG + 128));
			resultR = min(255, max(0, resultR + 128));

			int idx = (y * wImage + x) * 3;
			nImage[idx] = (unsigned char)resultB;
			nImage[idx + 1] = (unsigned char)resultG;
			nImage[idx + 2] = (unsigned char)resultR;
		}
	}
}
/************************************************************************************************
*																								*
*  ��ͨ�������		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void CartoonEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int kernelSize = 3;
	int pad = kernelSize / 2;
	int y, x, kx, ky;
	// ��ɫ����
	unsigned char* quantizedImage = new unsigned char[wImage * hImage * 3];
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* pixel = (unsigned char*)&oImage[(y * wImage + x) * 3];
			unsigned char* qPixel = (unsigned char*)&quantizedImage[(y * wImage + x) * 3];

			// ÿͨ��������64�ı���
			qPixel[0] = (pixel[0] / 64) * 64;
			qPixel[1] = (pixel[1] / 64) * 64;
			qPixel[2] = (pixel[2] / 64) * 64;
		}
	}

	// Sobel����
	int Gx[3][3] = {
		{-1, 0, 1},
		{-2, 0, 2},
		{-1, 0, 1}
	};
	int Gy[3][3] = {
		{-1, -2, -1},
		{ 0,  0,  0},
		{ 1,  2,  1}
	};

	// �Ҷ�ͼ & ��Եͼ
	unsigned char* gray = new unsigned char[wImage * hImage];
	unsigned char* edges = new unsigned char[wImage * hImage];

	// ת�Ҷ�
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* pixel = (unsigned char*)&oImage[(y * wImage + x) * 3];
			gray[y * wImage + x] = (unsigned char)((pixel[0] * 0.299 + pixel[1] * 0.587 + pixel[2] * 0.114));
		}
	}

	// Sobel��Ե���
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int gx = 0, gy = 0;
			for (ky = -1; ky <= 1; ky++) {
				for (kx = -1; kx <= 1; kx++) {
					int val = gray[(y + ky) * wImage + (x + kx)];
					gx += val * Gx[ky + 1][kx + 1];
					gy += val * Gy[ky + 1][kx + 1];
				}
			}
			int g = abs(gx) + abs(gy); // ���� sqrt(gx*gx + gy*gy)
			if (g > 255) g = 255;
			edges[y * wImage + x] = (unsigned char)g;
		}
	}

	// �ϲ���Ե����ɫ����ͼ��
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* qPixel = (unsigned char*)&quantizedImage[(y * wImage + x) * 3];
			unsigned char* outPixel = (unsigned char*)&nImage[(y * wImage + x) * 3];

			if (edges[y * wImage + x] > 80) { // �ɵ���ֵ
				outPixel[0] = 0;
				outPixel[1] = 0;
				outPixel[2] = 0;
			}
			else {
				outPixel[0] = qPixel[0];
				outPixel[1] = qPixel[1];
				outPixel[2] = qPixel[2];
			}
		}
	}

	// �����ڴ�
	delete[] quantizedImage;
	delete[] gray;
	delete[] edges;
}
//------------------------------   .bmp   ---------------------------------
void CartoonEffectBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int imageSize = wImage * hImage;
	char* quantizedImage = new char[imageSize * 3];
	char* gray = new char[imageSize];
	char* edges = new char[imageSize];
	int y, x, kx, ky;
	// 1. �Ҷ�ͼ����ɫ����
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			int idx = (y * wImage + x) * 3;
			unsigned char b = (unsigned char)oImage[idx];
			unsigned char g = (unsigned char)oImage[idx + 1];
			unsigned char r = (unsigned char)oImage[idx + 2];

			// �Ҷ�ֵ����
			gray[y * wImage + x] = (char)(0.114 * b + 0.587 * g + 0.299 * r);

			// ��ɫ������ʹ��ɫ���ֲڣ�
			quantizedImage[idx] = (char)((b / 64) * 64);
			quantizedImage[idx + 1] = (char)((g / 64) * 64);
			quantizedImage[idx + 2] = (char)((r / 64) * 64);
		}
	}

	// 2. Sobel ��Ե���
	int Gx[3][3] = { {-1, 0, 1}, {-2, 0, 2}, {-1, 0, 1} };
	int Gy[3][3] = { {-1, -2, -1}, {0, 0, 0}, {1, 2, 1} };

	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int gx = 0, gy = 0;
			for (ky = -1; ky <= 1; ky++) {
				for (kx = -1; kx <= 1; kx++) {
					int pixel = (unsigned char)gray[(y + ky) * wImage + (x + kx)];
					gx += pixel * Gx[ky + 1][kx + 1];
					gy += pixel * Gy[ky + 1][kx + 1];
				}
			}
			int grad = abs(gx) + abs(gy);
			if (grad > 255) grad = 255;
			edges[y * wImage + x] = (char)grad;
		}
	}

	// 3. �ϳɿ�ͨͼ��
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			int idx = (y * wImage + x) * 3;
			if ((unsigned char)edges[y * wImage + x] > 80) {
				nImage[idx] = 0;
				nImage[idx + 1] = 0;
				nImage[idx + 2] = 0;
			}
			else {
				nImage[idx] = quantizedImage[idx];     // B
				nImage[idx + 1] = quantizedImage[idx + 1]; // G
				nImage[idx + 2] = quantizedImage[idx + 2]; // R
			}
		}
	}

	delete[] quantizedImage;
	delete[] gray;
	delete[] edges;
}
/************************************************************************************************
*																								*
*  ��ɫ��������		            													        *
*																								*
************************************************************************************************/
//------------------------------   .bmp   ---------------------------------
void ApplyCoolToneBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int rowPitch = (wImage * 3 + 3) & ~3; // ÿ�в��뵽4�ֽ�

	for (int y = 0; y < hImage; y++)
	{
		for (int x = 0; x < wImage; x++)
		{
			int index = y * rowPitch + x * 3;

			unsigned char B = (unsigned char)oImage[index];
			unsigned char G = (unsigned char)oImage[index + 1];
			unsigned char R = (unsigned char)oImage[index + 2];

			int delta = 30;

			R = (R > delta) ? R - delta : 0;
			B = (B + delta > 255) ? 255 : B + delta;

			nImage[index] = (char)B;
			nImage[index + 1] = (char)G;
			nImage[index + 2] = (char)R;
		}
	}
}
/************************************************************************************************
*																								*
*  ůɫ��������		            													        *
*																								*
************************************************************************************************/
//------------------------------   .bmp   ---------------------------------
void ApplyWarmToneBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int rowPitch = (wImage * 3 + 3) & ~3; // ÿ���������ݵ����ֽ���������4�ֽڣ�

	for (int y = 0; y < hImage; y++)
	{
		for (int x = 0; x < wImage; x++)
		{
			int index = y * rowPitch + x * 3;

			unsigned char B = (unsigned char)oImage[index];       // B
			unsigned char G = (unsigned char)oImage[index + 1];   // G
			unsigned char R = (unsigned char)oImage[index + 2];   // R

			int delta = 30;

			R = (R + delta > 255) ? 255 : R + delta;
			B = (B > delta) ? B - delta : 0;

			nImage[index] = (char)B;
			nImage[index + 1] = (char)G;
			nImage[index + 2] = (char)R;
		}
	}
}
/************************************************************************************************
*																								*
*  �����˴�����		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void ApplyMosaic(char* oImage, char* nImage, int w, int h, int x1, int y1, int x2, int y2, int blockSize)
{
	// ���ȸ���ԭͼ����ͼ����ֹδѡ������Ϊ�գ�
	memcpy(nImage, oImage, w * h);

	int x_start = min(x1, x2);
	int x_end = max(x1, x2);
	int y_start = min(y1, y2);
	int y_end = max(y1, y2);

	for (int y = y_start; y < y_end; y += blockSize) {
		for (int x = x_start; x < x_end; x += blockSize) {
			int sum = 0;
			int count = 0;

			for (int j = 0; j < blockSize; j++) {
				for (int i = 0; i < blockSize; i++) {
					int xx = x + i;
					int yy = y + j;
					if (xx < w && yy < h) {
						sum += (unsigned char)oImage[yy * w + xx];
						count++;
					}
				}
			}

			int avg = count ? sum / count : 0;

			for (j = 0; j < blockSize; j++) {
				for (int i = 0; i < blockSize; i++) {
					int xx = x + i;
					int yy = y + j;
					if (xx < w && yy < h) {
						nImage[yy * w + xx] = (char)avg;
					}
				}
			}
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void ApplyMosaicBMP(char* oImage, char* nImage, int w, int h, int x1, int y1, int x2, int y2, int blockSize)
{
	// ÿ���� 3 �ֽڣ�B, G, R��
	const int bytesPerPixel = 3;

	// ����ԭͼ
	memcpy(nImage, oImage, w * h * bytesPerPixel);

	// ��֤ѡ�������ϵ�����
	int x_start = min(x1, x2);
	int x_end = max(x1, x2);
	int y_start = min(y1, y2);
	int y_end = max(y1, y2);

	for (int y = y_start; y < y_end; y += blockSize) {
		for (int x = x_start; x < x_end; x += blockSize) {
			int sumR = 0, sumG = 0, sumB = 0;
			int count = 0;

			// ͳ��һ�� block ��ƽ����ɫ
			for (int j = 0; j < blockSize; j++) {
				for (int i = 0; i < blockSize; i++) {
					int xx = x + i;
					int yy = y + j;
					if (xx < w && yy < h) {
						int idx = (yy * w + xx) * bytesPerPixel;
						sumB += (unsigned char)oImage[idx];
						sumG += (unsigned char)oImage[idx + 1];
						sumR += (unsigned char)oImage[idx + 2];
						count++;
					}
				}
			}

			int avgR = count ? sumR / count : 0;
			int avgG = count ? sumG / count : 0;
			int avgB = count ? sumB / count : 0;

			// ��ƽ��ֵ���� block
			for (j = 0; j < blockSize; j++) {
				for (int i = 0; i < blockSize; i++) {
					int xx = x + i;
					int yy = y + j;
					if (xx < w && yy < h) {
						int idx = (yy * w + xx) * bytesPerPixel;
						nImage[idx] = (char)avgB;
						nImage[idx + 1] = (char)avgG;
						nImage[idx + 2] = (char)avgR;
					}
				}
			}
		}
	}
}
