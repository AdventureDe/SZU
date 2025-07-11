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

BOOL ReadImage(LPSTR, char*, int, int); //读取图像信息并保存在Image[][]中
void ShowImage(char*, int, int, int, int);
BOOL ReadBmpImage(LPSTR, char*);
void ShowBmpImage(char*, int, int, int, int);
void OpenImageFileDlg(char*);
BOOL SaveBmpImage(LPSTR filename, char* imageData, int width, int height);
//********************************************************    增加的函数    ********************************************************
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
char NewImage[1024 * 1024];//储存处理后的图像
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
bool isSelectingMosaic = false;  // 是否启用选点（激活马赛克模式）
bool isFirstClick = true;        // 是否正在记录第一个点

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

			// 更新文本
			char text[64];
			sprintf(text, "对比度：%d", contrast);
			SetWindowText(hStaticContrastText, text);
			if (type == 0)
			{
				// 实时处理图像并显示
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

			// 更新文本
			char text[64];
			sprintf(text, "亮度：%d", brightness);
			SetWindowText(hStaticBrightnessText, text);
			if (type == 0)
			{
				// 实时处理图像并显示
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

			// 更新文本
			char text[64];
			sprintf(text, "模糊度：%d", Blur);
			SetWindowText(hStaticBlurText, text);
			if (type == 0)
			{
				// 实时处理图像并显示
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

			// 更新角度文本
			char text[64];
			sprintf(text, "旋转角度：%d", r);
			SetWindowText(hStaticRotateText, text);

			if (type == 0) {
				// 始终从原图进行旋转，而不是从NewImage（上一次旋转结果）
				memcpy(temp, OrgImage, IMAGEWIDTH * IMAGEHEIGHT);
				// 先进行水平翻转，再进行旋转
				if (shouldFlipHorizontal) {
					memcpy(temp1, temp, IMAGEWIDTH * IMAGEHEIGHT);
					FlipImageRAW(temp1, temp, IMAGEWIDTH, IMAGEHEIGHT);  // 水平翻转
				}
				ImageRotation(temp, NewImage, IMAGEWIDTH, IMAGEHEIGHT, r);  // 旋转
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				memcpy(temp, OrgImage, ImageWidth * ImageHeight * 3);
				// 先进行水平翻转，再进行旋转
				if (shouldFlipHorizontal) {
					memcpy(temp1, temp, ImageWidth * ImageHeight * 3);
					FlipImageBMP(temp1, temp, ImageWidth, ImageHeight);  // 水平翻转
				}
				ImageRotationBMP(temp, NewImage, ImageWidth, ImageHeight, r);  // 旋转
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
		}


		else if ((HWND)lParam == hSlider4)
		{
			currentSharpenValue = SendMessage(hSlider4, TBM_GETPOS, 0, 0);
			int s = currentSharpenValue;

			// 更新文本
			char text[64];
			sprintf(text, "锐度：%d", s);
			SetWindowText(hStaticSharpenText, text);
			if (type == 0)
			{
				// 实时处理图像并显示
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
			//------------------------------   对比度函数管理   ---------------------------------
		case 2001: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("contrast_output.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 contrast_output.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("contrast_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 contrast_output.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}

		case 2002: // 重置按钮
		{
			currentContrastValue = 0;
			SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);
			SetWindowText(hStaticContrastText, "对比度：1.00");
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
		//------------------------------   亮度调整函数   ---------------------------------
		case 2003: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("brightness_output.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 brightness_output.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("brightness_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 brightness_output.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}
		case 2004: // 重置按钮
		{
			currentBrightnessValue = 0; // 恢复1.0
			SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);
			SetWindowText(hStaticBrightnessText, "亮度：0");
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
		//------------------------------   模糊度调整函数   ---------------------------------
		case 2005: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("blur_output.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 blur_output.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("blur_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 blur_output.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}
		case 2006: // 重置按钮
		{
			currentBlurValue = 0;
			SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);
			SetWindowText(hStaticBlurText, "模糊度：0");
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
		//------------------------------   旋转度调整函数   ---------------------------------
		case 2007: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("rotate_output.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 rotate_output.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("rotate_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 rotate_output.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}
		case 2008: // 重置按钮
		{
			currentRotateValue = 0;  // 重置为0度
			SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);
			SetWindowText(hStaticRotateText, "旋转角度：0");

			if (type == 0)
			{
				ImageRotation(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, 0);  // 旋转0度
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1)
			{
				ImageRotationBMP(OrgImage, NewImage, ImageWidth, ImageHeight, 0);  // 旋转0度
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			SendMessage(hWnd, WM_COMMAND, IDM_21, 0);
			break;
		}
		//------------------------------   锐度调整函数   ---------------------------------
		case 2009: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("sharpen_output.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 sharpen_output.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("sharpen_output.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 sharpen_output.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}
		case 2010: // 重置按钮
		{
			currentSharpenValue = 0; // 恢复1.0
			SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);
			SetWindowText(hStaticSharpenText, "锐度：0");
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
		case 2011: // 水平翻转
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
			// 设置标志，表示接下来会进行旋转之前需要翻转
			shouldFlipHorizontal = true;

			should = false;
			SendMessage(hWnd, WM_COMMAND, IDM_21, 0);  // 刷新显示
			break;
		}
		//------------------------------   马赛克函数   ---------------------------------
		case 2012: // 保存按钮
		{
			if (type == 0)
			{
				// 保存为 .raw 文件
				FILE* fp = fopen("mosaic.raw", "wb");  // 保存路径可自定义
				if (fp != NULL)
				{
					fwrite(NewImage, sizeof(char), IMAGEWIDTH * IMAGEHEIGHT, fp);
					fclose(fp);
					MessageBox(hWnd, "图片已保存为 mosaic.raw！", "提示", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "保存失败，无法打开文件！", "错误", MB_ICONERROR);
				}
			}
			else if (type == 1) {
				if (SaveBmpImage("mosaic.bmp", NewImage, ImageWidth, ImageHeight))
				{
					MessageBox(hWnd, "图片已保存为 mosaic.bmp！", "提示", MB_OK);
				}
				else {
					MessageBox(hWnd, "保存失败！", "错误", MB_ICONERROR);
				}
			}
			break;
		}
		case 2013: // 重置按钮
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
			OpenImageFileDlg("打开.Raw图像文件");
			ReadImage(ImgDlgFileName, OrgImage, IMAGEWIDTH, IMAGEHEIGHT);
			ShowImage(OrgImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS);
			break;
		}
		case IDM_SHOWBMPIMAGE:
		{
			OpenImageFileDlg("打开.Bmp图像文件");
			ReadBmpImage(ImgDlgFileName, OrgImage);
			ShowBmpImage(OrgImage, ImageWidth, ImageHeight, XPOS, YPOS);
			break;
		}
		//------------------------------   素描风处理   ---------------------------------
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
			//------------------------------   浮雕风处理   ---------------------------------
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
			//------------------------------   卡通风处理   ---------------------------------
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
			//------------------------------   滑块对比度处理   ---------------------------------
		case IDM_18:
		{
			if (type == 0)
			{
				// 滑块
				hSlider = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN, SLIDER_MAX));
				SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);   // 初始值
				SendMessage(hSlider, TBM_SETTICFREQ, 25, 0);                     // 每隔25画一条刻度线

				//3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider, TBM_SETPAGESIZE, 0, 1); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider, TBM_SETLINESIZE, 0, 1); // 箭头或键盘移动1单位
				// 静态文本：显示当前对比度
				hStaticContrastText = CreateWindow(
					"STATIC", "对比度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2001, hInst, NULL);

				// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2002, hInst, NULL);

				// 初次显示图像
				int contrast = currentContrastValue;
				AdjustContrast(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, contrast);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				// 滑块
				hSlider = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN, SLIDER_MAX));
				SendMessage(hSlider, TBM_SETPOS, TRUE, currentContrastValue);   // 初始值
				SendMessage(hSlider, TBM_SETTICFREQ, 25, 0);                     // 每隔25画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider, TBM_SETPAGESIZE, 0, 1); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider, TBM_SETLINESIZE, 0, 1); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticContrastText = CreateWindow(
					"STATIC", "对比度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2001, hInst, NULL);

				// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2002, hInst, NULL);

				// 初次显示图像
				int contrast = currentContrastValue;
				AdjustContrastBMP(OrgImage, NewImage, ImageWidth, ImageHeight, contrast);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   滑块亮度处理   ---------------------------------
		case IDM_19:
		{
			if (type == 0)
			{
				//// 滑块
				hSlider1 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider1, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN1, SLIDER_MAX1));
				SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);   // 初始值
				SendMessage(hSlider1, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider1, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider1, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticBrightnessText = CreateWindow(
					"STATIC", "亮度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2003, hInst, NULL);

				//// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2004, hInst, NULL);

				//// 初次显示图像
				int brightness = currentBrightnessValue;
				BrightnessChangeRAW(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, brightness);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				// 滑块
				hSlider1 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider1, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN1, SLIDER_MAX1));
				SendMessage(hSlider1, TBM_SETPOS, TRUE, currentBrightnessValue);   // 初始值
				SendMessage(hSlider1, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider1, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider1, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticBrightnessText = CreateWindow(
					"STATIC", "亮度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2003, hInst, NULL);

				// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2004, hInst, NULL);

				// 初次显示图像
				int brightness = currentBrightnessValue;
				BrightnessChangeBMP(OrgImage, NewImage, ImageWidth, ImageHeight, brightness);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   滑块模糊度处理   ---------------------------------
		case IDM_20:
		{
			if (type == 0)
			{
				//// 滑块
				hSlider2 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider2, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN2, SLIDER_MAX2));
				SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);   // 初始值
				SendMessage(hSlider2, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider2, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider2, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticBlurText = CreateWindow(
					"STATIC", "模糊度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2005, hInst, NULL);

				//// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2006, hInst, NULL);

				//// 初次显示图像
				int blur = currentBlurValue;
				GaussianBlurWithStrength(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, blur);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				//// 滑块
				hSlider2 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider2, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN2, SLIDER_MAX2));
				SendMessage(hSlider2, TBM_SETPOS, TRUE, currentBlurValue);   // 初始值
				SendMessage(hSlider2, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider2, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider2, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticBlurText = CreateWindow(
					"STATIC", "模糊度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2005, hInst, NULL);

				//// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2006, hInst, NULL);

				//// 初次显示图像
				int blur = currentBlurValue;
				GaussianBlurWithStrengthBMP(OrgImage, NewImage, ImageWidth, ImageHeight, blur);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------   滑块旋转处理   ---------------------------------
		case IDM_21:
		{
			if (type == 0)
			{
				if (!hSlider3) // 防止重复创建
				{
					//// 滑块
					hSlider3 = CreateWindowEx(
						0, TRACKBAR_CLASS, NULL,
						WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
						50, 480, 300, 30,  // X, Y, Width, Height
						hWnd, (HMENU)1001, hInst, NULL);

					//// 2. 设置滑块范围、初始值、刻度频率
					SendMessage(hSlider3, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN3, SLIDER_MAX3));
					SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);   // 初始值
					SendMessage(hSlider3, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

					////3. 关键：设置滑动步长，防止“两格两格滑动”
					SendMessage(hSlider3, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
					SendMessage(hSlider3, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
					//// 静态文本：显示当前对比度
					hStaticRotateText = CreateWindow(
						"STATIC", "旋转角度：0",
						WS_CHILD | WS_VISIBLE,
						360, 480, 120, 25,
						hWnd, NULL, hInst, NULL);
					char buffer[64];
					sprintf(buffer, "旋转角度：%d", currentRotateValue);
					SetWindowText(hStaticRotateText, buffer);
					//// 应用按钮
					hBtnApply = CreateWindow(
						"BUTTON", "保存图片",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
						50, 520, 80, 30,
						hWnd, (HMENU)2007, hInst, NULL);

					//// 重置按钮
					hBtnReset = CreateWindow(
						"BUTTON", "重置",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						150, 520, 80, 30,
						hWnd, (HMENU)2008, hInst, NULL);

					hBtnFlip = CreateWindow(//水平翻转
						"BUTTON", "镜像",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						250, 520, 80, 30,
						hWnd, (HMENU)2011, hInst, NULL);
				}
				if (should)
				{
					//// 初次显示图像
					int r = currentRotateValue;
					ImageRotation(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, r);
				}
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);

			}
			else if (type == 1) {
				if (!hSlider3) // 防止重复创建
				{
					//// 滑块
					hSlider3 = CreateWindowEx(
						0, TRACKBAR_CLASS, NULL,
						WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
						50, 480, 300, 30,  // X, Y, Width, Height
						hWnd, (HMENU)1001, hInst, NULL);

					//// 2. 设置滑块范围、初始值、刻度频率
					SendMessage(hSlider3, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN3, SLIDER_MAX3));
					SendMessage(hSlider3, TBM_SETPOS, TRUE, currentRotateValue);   // 初始值
					SendMessage(hSlider3, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

					////3. 关键：设置滑动步长，防止“两格两格滑动”
					SendMessage(hSlider3, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
					SendMessage(hSlider3, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
					//// 静态文本：显示当前对比度
					hStaticRotateText = CreateWindow(
						"STATIC", "旋转角度：0",
						WS_CHILD | WS_VISIBLE,
						360, 480, 120, 25,
						hWnd, NULL, hInst, NULL);
					char buffer[64];
					sprintf(buffer, "旋转角度：%d", currentRotateValue);
					SetWindowText(hStaticRotateText, buffer);
					//// 应用按钮
					hBtnApply = CreateWindow(
						"BUTTON", "保存图片",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
						50, 520, 80, 30,
						hWnd, (HMENU)2007, hInst, NULL);

					//// 重置按钮
					hBtnReset = CreateWindow(
						"BUTTON", "重置",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						150, 520, 80, 30,
						hWnd, (HMENU)2008, hInst, NULL);
					hBtnFlip = CreateWindow(//水平翻转
						"BUTTON", "镜像",
						WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
						250, 520, 80, 30,
						hWnd, (HMENU)2011, hInst, NULL);
				}
				if (should)
				{
					//// 初次显示图像
					int r = currentRotateValue;
					ImageRotationBMP(OrgImage, NewImage, ImageWidth, ImageHeight, r);
				}
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);

			}
			break;
		}
		//------------------------------   滑块锐化处理   ---------------------------------
		case IDM_22:
		{
			if (type == 0)
			{
				//// 滑块
				hSlider4 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider4, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN4, SLIDER_MAX4));
				SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);   // 初始值
				SendMessage(hSlider4, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider4, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider4, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticSharpenText = CreateWindow(
					"STATIC", "锐度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// 应用按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2007, hInst, NULL);

				//// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2008, hInst, NULL);

				//// 初次显示图像
				int s = currentSharpenValue;
				Sharpen(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT, s);
				ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS + 400);
			}
			else if (type == 1) {
				//// 滑块
				hSlider4 = CreateWindowEx(
					0, TRACKBAR_CLASS, NULL,
					WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
					50, 480, 300, 30,  // X, Y, Width, Height
					hWnd, (HMENU)1001, hInst, NULL);

				//// 2. 设置滑块范围、初始值、刻度频率
				SendMessage(hSlider4, TBM_SETRANGE, TRUE, MAKELPARAM(SLIDER_MIN4, SLIDER_MAX4));
				SendMessage(hSlider4, TBM_SETPOS, TRUE, currentSharpenValue);   // 初始值
				SendMessage(hSlider4, TBM_SETTICFREQ, 10, 0);                     // 每隔1画一条刻度线

				////3. 关键：设置滑动步长，防止“两格两格滑动”
				SendMessage(hSlider4, TBM_SETPAGESIZE, 0, 2); // 页移动（鼠标点击滑槽）时移动1单位
				SendMessage(hSlider4, TBM_SETLINESIZE, 0, 2); // 箭头或键盘移动1单位
				//// 静态文本：显示当前对比度
				hStaticSharpenText = CreateWindow(
					"STATIC", "锐度：0",
					WS_CHILD | WS_VISIBLE,
					360, 480, 120, 25,
					hWnd, NULL, hInst, NULL);

				//// 保存按钮
				hBtnApply = CreateWindow(
					"BUTTON", "保存图片",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
					50, 520, 80, 30,
					hWnd, (HMENU)2007, hInst, NULL);

				//// 重置按钮
				hBtnReset = CreateWindow(
					"BUTTON", "重置",
					WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
					150, 520, 80, 30,
					hWnd, (HMENU)2008, hInst, NULL);

				//// 初次显示图像
				int s = currentSharpenValue;
				SharpenBMP(OrgImage, NewImage, ImageWidth, ImageHeight, s);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		}
		//------------------------------  冷色调处理   ---------------------------------
		case IDM_23:
			if (type == 0)//.raw
			{
				MessageBox(hWnd, ".Raw灰度图没有颜色通道", "提示", MB_OK);
			}
			else if (type == 1) {//.bmp
				ApplyCoolToneBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		case IDM_24:
			if (type == 0)//.raw
			{
				MessageBox(hWnd, ".Raw灰度图没有颜色通道", "提示", MB_OK);
			}
			else if (type == 1) {//.bmp
				ApplyWarmToneBMP(OrgImage, NewImage, ImageWidth, ImageHeight);
				ShowBmpImage(NewImage, ImageWidth, ImageHeight, XPOS + 700, YPOS);
			}
			break;
		case IDM_25:
		{
			isSelectingMosaic = true;     // 启动马赛克模式
			isFirstClick = true;          // 下一次点击为第一个点
			MessageBox(hWnd, "请在图像上点击两个点，选择马赛克区域", "提示", MB_OK);
			//// 应用按钮
			hBtnApply = CreateWindow(
				"BUTTON", "保存图片",
				WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
				50, 520, 80, 30,
				hWnd, (HMENU)2012, hInst, NULL);

			//// 重置按钮
			hBtnReset = CreateWindow(
				"BUTTON", "重置",
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

			// 转换成图像内坐标
			int imgX = mx - 100;
			int imgY = my - 50;
			if(type==0)
			{
				// 保证坐标在图像范围内
				if (imgX >= 0 && imgX < IMAGEWIDTH && imgY >= 0 && imgY < IMAGEHEIGHT) {
					if (isFirstClick) {
						ptMosaic1.x = imgX;
						ptMosaic1.y = imgY;
						isFirstClick = false;
					}
					else {
						ptMosaic2.x = imgX;
						ptMosaic2.y = imgY;
						// 调用马赛克函数
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
				// 保证坐标在图像范围内
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
*   读无格式RAW图像文件																			*
*																								*
************************************************************************************************/
BOOL ReadImage(LPSTR ImageFileName, char* oImage, int wImage, int hImage) //读取图像信息并保存在Image[][]中
{
	type = 0;
	OFSTRUCT of;
	HFILE Image_fp;

	Image_fp = OpenFile(ImageFileName, &of, OF_READ);
	if (Image_fp == HFILE_ERROR)
	{
		MessageBox(NULL, ImageFileName, "打开文件出错信息", MB_OK);
		return FALSE;
	}

	_lread(Image_fp, oImage, wImage * hImage);
	_lclose(Image_fp);

	return TRUE;
}
/************************************************************************************************
*																								*
*   显示RAW图像																					*
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
*   从BMP图像中，读出图像头信息，主要包括图像长度和宽度											*
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
		MessageBox(NULL, ImageFileName, "打开文件出错信息", MB_OK);
		return FALSE;
	}

	_llseek(Image_fp, 0, 0);
	_lread(Image_fp, &bfImage, sizeof(BITMAPFILEHEADER));

	if ((bfImage.bfType != 0x4d42)) {		// "BM"
		MessageBox(NULL, NULL, "打开bmp文件出错信息", MB_OK);
		return FALSE;
	}

	_lread(Image_fp, &biImage, sizeof(BITMAPINFOHEADER));

	ImageWidth = biImage.biWidth;
	ImageHeight = biImage.biHeight;
	if (biImage.biBitCount != 24) {		// 24位彩色图像
		MessageBox(NULL, NULL, "不是24位bmp图像", MB_OK);
		return FALSE;
	}

	_llseek(Image_fp, bfImage.bfOffBits, 0);
	_lread(Image_fp, oImage, biImage.biWidth * biImage.biHeight * 3);
	_lclose(Image_fp);

	return TRUE;
}
/************************************************************************************************
*																								*
*   显示BMP图像																					*
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
*   保存BMP图像																					*
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

	// 填写文件头
	bfh.bfType = 0x4D42;  // 'BM'
	bfh.bfSize = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER) + imageSize;
	bfh.bfReserved1 = 0;
	bfh.bfReserved2 = 0;
	bfh.bfOffBits = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER);

	// 填写信息头
	bih.biSize = sizeof(BITMAPINFOHEADER);
	bih.biWidth = width;
	bih.biHeight = -height;  // 注意这里是正值，表示从下到上
	bih.biPlanes = 1;
	bih.biBitCount = 24;
	bih.biCompression = BI_RGB;
	bih.biSizeImage = imageSize;
	bih.biXPelsPerMeter = 0;
	bih.biYPelsPerMeter = 0;
	bih.biClrUsed = 0;
	bih.biClrImportant = 0;

	// 打开文件
	OFSTRUCT of;
	HFILE hFile = OpenFile(filename, &of, OF_CREATE | OF_WRITE);
	if (hFile == HFILE_ERROR) {
		MessageBox(NULL, filename, "无法创建文件", MB_ICONERROR);
		return FALSE;
	}

	// 写入 BMP 文件头和信息头
	_lwrite(hFile, (LPCSTR)&bfh, sizeof(BITMAPFILEHEADER));
	_lwrite(hFile, (LPCSTR)&bih, sizeof(BITMAPINFOHEADER));

	// 写入像素数据（按行写，注意加填充）
	for (int y = height - 1; y >= 0; y--) {
		for (int x = 0; x < width; x++) {
			int index = (y * width + x) * 3;
			_lwrite(hFile, &imageData[index], 3);
		}
		// 写入每行的 padding（补0）
		for (int p = 0; p < paddingSize; p++) {
			BYTE zero = 0;
			_lwrite(hFile, (LPCSTR)&zero, 1);
		}
	}

	_lclose(hFile);
	MessageBox(NULL, "BMP图像保存成功！", "提示", MB_OK);
	return TRUE;
}
/************************************************************************************************
*																								*
*   打开读文件名系统对话框																		*
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
//		MessageBox(NULL, "无法创建输出文件", "错误", MB_OK);
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
//			fprintf(fp, "(%3d,%3d,%3d) ", R, G, B);  // 以 RGB 顺序写出
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
		MessageBox(NULL, "无法创建输出文件", "错误", MB_OK);
		return;
	}

	// 遍历图像的每一个像素，并将灰度值输出到文本文件
	for (int j = 0; j < hImage; j++)
	{
		for (int i = 0; i < wImage; i++)
		{
			int index = j * wImage + i;  // 获取当前像素的索引
			BYTE grayValue = (BYTE)nImage[index];  // 获取灰度值

			fprintf(fp, "%3d ", grayValue);  // 将灰度值写入文本文件
		}
		fprintf(fp, "\n");
	}

	fclose(fp);
}

/************************************************************************************************
*																								*
*   图像简单几何变换函数              															*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void SimpleGeometricTranslation(char* oImage, char* nImage, int wImage, int hImage,
	double* sgt_Array)
{
	double ox, oy;		int i, nx, ny, x0, y0;
	for (i = 0; i < wImage * hImage; i++)
		nImage[i] = 0;		  //清空新图像
	for (ny = 0; ny < hImage; ny++) {//目标图像的每个像素点 (nx, ny)
		for (nx = 0; nx < wImage; nx++) {
			x0 = nx - wImage / 2;				  //以图像中心为原点
			y0 = ny - hImage / 2;
			ox = sgt_Array[0] * (double)x0 + sgt_Array[1] * (double)x0 + sgt_Array[2];
			oy = sgt_Array[3] * (double)y0 + sgt_Array[4] * (double)y0 + sgt_Array[5];
			ox += wImage / 2;				  //恢复图像原点位置
			oy += hImage / 2;
			if ((ox < 0.0) || (ox >= wImage - 1) || (oy < 0.0) || (oy >= hImage - 1))
				nImage[ny * wImage + nx] = 0;			  //超出范围部分置0
			else
				nImage[ny * wImage + nx] = oImage[((int)oy) * wImage + (int)ox];//y*width+x到达目标像素
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void SimpleGeometricTranslationBMP(char* oImage, char* nImage, int wImage, int hImage, double* sgt_Array)
{
	int sx, sy, ox, oy;
	double axy, bxy;

	// 清空新图像（全黑）
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
*   图像旋转               																		*
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

	double radians = iAngle * pi / 180.0;  // 角度转弧度

	// 构造旋转矩阵
	gt_Array[0] = cos(radians);   // cosθ
	gt_Array[1] = -sin(radians);  // -sinθ
	gt_Array[3] = sin(radians);   // sinθ
	gt_Array[4] = cos(radians);   // cosθ

	SimpleGeometricTranslationBMP(oImage, nImage, wImage, hImage, gt_Array);
}
/************************************************************************************************
*																								*
*  调整对比度函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void AdjustContrast(char* oImage, char* nImage, int wImage, int hImage, int contrast)
{
	// 映射对比度值到比例系数：contrast ∈ [-50, 50] → factor ∈ [0.5, 1.5]
	float factor = 1.0f + (contrast / 100.0f);  // -50 → 0.5，0 → 1.0，50 → 1.5

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
	int size = wImage * hImage * 3;  // 每个像素有 R, G, B 共3字节

	for (int i = 0; i < size; i += 3)
	{
		for (int c = 0; c < 3; ++c)  // 遍历 R、G、B 分量
		{
			int pixel = (unsigned char)oImage[i + c];  // 读取原始分量值
			int new_pixel = static_cast<int>((pixel - 128) * factor + 128);  // 对比度变换

			// 限制范围 [0, 255]
			if (new_pixel < 0) new_pixel = 0;
			if (new_pixel > 255) new_pixel = 255;

			nImage[i + c] = static_cast<char>(new_pixel);  // 写入新图像
		}
	}
}
/************************************************************************************************
*																								*
*  亮度调整函数 		            													        *
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
	int size = wImage * hImage * 3; // 24位图像，每像素3字节：BGR

	for (int i = 0; i < size; i += 3)
	{
		// 分别处理 BGR 三通道
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
*  锐度调整函数 		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void Sharpen(char* oImage, char* nImage, int wImage, int hImage, int sharpenness)
{
	// 将滑块值 [0, 100] 映射到内核中心权重 [4, 10]
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

					// 镜像边界处理
					if (px < 0) px = -px;
					if (py < 0) py = -py;
					if (px >= wImage)  px = 2 * wImage - px - 1;
					if (py >= hImage)  py = 2 * hImage - py - 1;

					unsigned char pixel = (unsigned char)oImage[py * wImage + px];
					sum += pixel * kernel[ky + pad][kx + pad];
				}
			}

			// 截断到 0~255
			if (sum < 0) sum = 0;
			if (sum > 255) sum = 255;

			nImage[y * wImage + x] = (char)sum;
		}
	}
}

//------------------------------   .bmp   ---------------------------------
void SharpenBMP(char* oImage, char* nImage, int wImage, int hImage, int sharpenness)
{
	// 将滑块值 [0, 100] 映射到内核中心权重 [4, 10]
	float centerWeight = 1.0f + (sharpenness / 25.0f) * 1.5f;
	float edgeWeight = (centerWeight - 1.0f) / 4.0f;

	float kernel[3][3] = {
		{  0.0f,      -edgeWeight,  0.0f },
		{ -edgeWeight, centerWeight, -edgeWeight },
		{  0.0f,      -edgeWeight,  0.0f }
	};

	int kernelSize = 3;
	int pad = kernelSize / 2;

	// 每行字节数必须是4的倍数（BMP格式要求）
	int bytesPerPixel = 3;
	int rowSize = (wImage * bytesPerPixel + 3) / 4 * 4;

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			for (int c = 0; c < 3; c++) { // 处理B, G, R三通道
				int sum = 0;

				for (int ky = -pad; ky <= pad; ky++) {
					for (int kx = -pad; kx <= pad; kx++) {
						int px = x + kx;
						int py = y + ky;

						// 镜像边界处理
						if (px < 0) px = -px;
						if (py < 0) py = -py;
						if (px >= wImage)  px = 2 * wImage - px - 1;
						if (py >= hImage)  py = 2 * hImage - py - 1;

						unsigned char pixel = (unsigned char)oImage[py * rowSize + px * 3 + c];
						sum += pixel * kernel[ky + pad][kx + pad];
					}
				}

				// 裁剪范围到0~255
				if (sum < 0) sum = 0;
				if (sum > 255) sum = 255;

				nImage[y * rowSize + x * 3 + c] = (char)sum;
			}
		}
	}
}
/************************************************************************************************
*																								*
*  翻转函数 		            	                 											*
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
*  模糊函数，基于高斯滤波          	                 											*
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void GaussianBlurWithStrength(char* oImage, char* nImage, int wImage, int hImage, int strength)
{
	// 3x3 高斯核
	int kernel[3][3] = {
		{ 1, 2, 1 },
		{ 2, 4, 2 },
		{ 1, 2, 1 }
	};
	int kernelSize = 3;
	int kernelSum = 16;
	int pad = 1;

	// 将 strength ∈ [0, 100] 映射到 blend ∈ [0.0, 1.0]
	float blend = strength / 50.0f;

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			float blurSum = 0.0f;

			for (int ky = -pad; ky <= pad; ky++) {
				for (int kx = -pad; kx <= pad; kx++) {
					int px = x + kx;
					int py = y + ky;

					// 边界镜像处理
					if (px < 0) px = -px;
					if (py < 0) py = -py;
					if (px >= wImage) px = 2 * wImage - px - 1;
					if (py >= hImage) py = 2 * hImage - py - 1;

					unsigned char pixel = (unsigned char)oImage[py * wImage + px];
					blurSum += pixel * kernel[ky + pad][kx + pad];
				}
			}

			// 得到高斯模糊像素值
			blurSum /= kernelSum;

			// 当前像素原始值
			unsigned char original = (unsigned char)oImage[y * wImage + x];

			// 插值：输出 = 原图 * (1 - blend) + 模糊 * blend
			float finalVal = (1.0f - blend) * original + blend * blurSum;

			if (finalVal < 0) finalVal = 0;
			if (finalVal > 255) finalVal = 255;

			nImage[y * wImage + x] = (unsigned char)(finalVal + 0.5f); // 四舍五入
		}
	}
}
//------------------------------   .bmp   ---------------------------------
void GaussianBlurWithStrengthBMP(char* oImage, char* nImage, int wImage, int hImage, int strength)
{
	// 高斯核（3x3）
	int kernel[3][3] = {
		{ 1, 2, 1 },
		{ 2, 4, 2 },
		{ 1, 2, 1 }
	};
	int kernelSize = 3;
	int kernelSum = 16;
	int pad = 1;

	float blend = strength / 50.0f;

	int lineBytes = wImage * 3; // 每行像素数据字节数

	for (int y = 0; y < hImage; y++) {
		for (int x = 0; x < wImage; x++) {
			for (int c = 0; c < 3; c++) { // B, G, R 通道

				float blurSum = 0.0f;

				for (int ky = -pad; ky <= pad; ky++) {
					for (int kx = -pad; kx <= pad; kx++) {
						int px = x + kx;
						int py = y + ky;

						// 边界镜像处理
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
*  像素风格处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void SketchEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int sobelX[3][3] = { { -1, 0, 1 }, { -2, 0, 2 }, { -1, 0, 1 } };
	int sobelY[3][3] = { { -1, -2, -1 }, { 0, 0, 0 }, { 1, 2, 1 } };
	int pad = 1; // Sobel核大小为3x3，pad为1
	int y, x, ky, kx;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int gradX = 0, gradY = 0;

			// 卷积操作
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

			// 计算梯度大小
			int gradient = sqrt(gradX * gradX + gradY * gradY);
			gradient = min(255, max(0, gradient));

			// 输出为反转图像
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

			// 卷积操作（灰度 + Sobel）
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

			// 梯度幅值
			int grad = (int)sqrt((double)(gradX * gradX + gradY * gradY));
			grad = grad > 255 ? 255 : (grad < 0 ? 0 : grad);

			// 反转颜色：素描风格（黑线白底）
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
*  浮雕风格处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void EmbossEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int embossKernel[3][3] = { { -2, -1, 0 }, { -1, 1, 1 }, { 0, 1, 2 } };
	int pad = 1;  // 核大小为3x3
	int y, x, ky, kx;
	for (y = 1; y < hImage - 1; y++) {
		for (x = 1; x < wImage - 1; x++) {
			int resultR = 0, resultG = 0, resultB = 0;

			// 卷积操作
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

			// 增强对比度和设置范围
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

			// 添加偏移提升亮度，限制在 [0,255]
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
*  卡通风格处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void CartoonEffect(char* oImage, char* nImage, int wImage, int hImage)
{
	int kernelSize = 3;
	int pad = kernelSize / 2;
	int y, x, kx, ky;
	// 颜色量化
	unsigned char* quantizedImage = new unsigned char[wImage * hImage * 3];
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* pixel = (unsigned char*)&oImage[(y * wImage + x) * 3];
			unsigned char* qPixel = (unsigned char*)&quantizedImage[(y * wImage + x) * 3];

			// 每通道量化到64的倍数
			qPixel[0] = (pixel[0] / 64) * 64;
			qPixel[1] = (pixel[1] / 64) * 64;
			qPixel[2] = (pixel[2] / 64) * 64;
		}
	}

	// Sobel算子
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

	// 灰度图 & 边缘图
	unsigned char* gray = new unsigned char[wImage * hImage];
	unsigned char* edges = new unsigned char[wImage * hImage];

	// 转灰度
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* pixel = (unsigned char*)&oImage[(y * wImage + x) * 3];
			gray[y * wImage + x] = (unsigned char)((pixel[0] * 0.299 + pixel[1] * 0.587 + pixel[2] * 0.114));
		}
	}

	// Sobel边缘检测
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
			int g = abs(gx) + abs(gy); // 或用 sqrt(gx*gx + gy*gy)
			if (g > 255) g = 255;
			edges[y * wImage + x] = (unsigned char)g;
		}
	}

	// 合并边缘与颜色量化图像
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			unsigned char* qPixel = (unsigned char*)&quantizedImage[(y * wImage + x) * 3];
			unsigned char* outPixel = (unsigned char*)&nImage[(y * wImage + x) * 3];

			if (edges[y * wImage + x] > 80) { // 可调阈值
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

	// 清理内存
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
	// 1. 灰度图和颜色量化
	for (y = 0; y < hImage; y++) {
		for (x = 0; x < wImage; x++) {
			int idx = (y * wImage + x) * 3;
			unsigned char b = (unsigned char)oImage[idx];
			unsigned char g = (unsigned char)oImage[idx + 1];
			unsigned char r = (unsigned char)oImage[idx + 2];

			// 灰度值计算
			gray[y * wImage + x] = (char)(0.114 * b + 0.587 * g + 0.299 * r);

			// 颜色量化（使颜色块变粗糙）
			quantizedImage[idx] = (char)((b / 64) * 64);
			quantizedImage[idx + 1] = (char)((g / 64) * 64);
			quantizedImage[idx + 2] = (char)((r / 64) * 64);
		}
	}

	// 2. Sobel 边缘检测
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

	// 3. 合成卡通图像
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
*  冷色调处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .bmp   ---------------------------------
void ApplyCoolToneBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int rowPitch = (wImage * 3 + 3) & ~3; // 每行补齐到4字节

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
*  暖色调处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .bmp   ---------------------------------
void ApplyWarmToneBMP(char* oImage, char* nImage, int wImage, int hImage)
{
	int rowPitch = (wImage * 3 + 3) & ~3; // 每行像素数据的总字节数（补齐4字节）

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
*  马赛克处理函数		            													        *
*																								*
************************************************************************************************/
//------------------------------   .raw   ---------------------------------
void ApplyMosaic(char* oImage, char* nImage, int w, int h, int x1, int y1, int x2, int y2, int blockSize)
{
	// 首先复制原图到新图（防止未选中区域为空）
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
	// 每像素 3 字节（B, G, R）
	const int bytesPerPixel = 3;

	// 复制原图
	memcpy(nImage, oImage, w * h * bytesPerPixel);

	// 保证选区从左上到右下
	int x_start = min(x1, x2);
	int x_end = max(x1, x2);
	int y_start = min(y1, y2);
	int y_end = max(y1, y2);

	for (int y = y_start; y < y_end; y += blockSize) {
		for (int x = x_start; x < x_end; x += blockSize) {
			int sumR = 0, sumG = 0, sumB = 0;
			int count = 0;

			// 统计一个 block 的平均颜色
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

			// 将平均值填充回 block
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
