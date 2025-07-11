// ImageProcessing.cpp : Defines the entry point for the application.
//

#include "stdafx.h"
#include "resource.h"
#include <direct.h>
#include <commdlg.h>

#define MAX_LOADSTRING 100

BOOL ReadImage(LPSTR, char *, int, int); //��ȡͼ����Ϣ��������Image[][]��
void ShowImage(char *, int, int, int, int);
BOOL ReadBmpImage(LPSTR, char *);
void ShowBmpImage(char *, int, int, int, int);
void OpenImageFileDlg(char *);
void LaplaceEdgeProcessing(char *oImage, char *nImage, 
				      int wImage, int hImage);
void ImageMaskProcessing(char *oImage, char *nImage, int wImage, int hImage, 
			       int *Mask, int MaskWH, int MaskCoff);
void MiddleFilterProcessing(char *oImage, char *nImage, int wImage, int hImage);
void SobelEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage);
void PrewittEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage);
void RobertsEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage);
HDC  hWinDC;
int ImageWidth, ImageHeight;
char ImgDlgFileName[MAX_PATH];
char ImgDlgFileDir[MAX_PATH];
char OrgImage[1024*1024];
char NewImage[1024*1024];
#define IMAGEWIDTH	256
#define IMAGEHEIGHT	256
#define XPOS		100
#define YPOS		100

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
	if (!InitInstance (hInstance, nCmdShow)) 
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

	wcex.style			= CS_HREDRAW | CS_VREDRAW;
	wcex.lpfnWndProc	= (WNDPROC)WndProc;
	wcex.cbClsExtra		= 0;
	wcex.cbWndExtra		= 0;
	wcex.hInstance		= hInstance;
	wcex.hIcon			= LoadIcon(hInstance, (LPCTSTR)IDI_IMAGEPROCESSING);
	wcex.hCursor		= LoadCursor(NULL, IDC_ARROW);
	wcex.hbrBackground	= (HBRUSH)(COLOR_WINDOW+1);
	wcex.lpszMenuName	= (LPCSTR)IDC_IMAGEPROCESSING;
	wcex.lpszClassName	= szWindowClass;
	wcex.hIconSm		= LoadIcon(wcex.hInstance, (LPCTSTR)IDI_SMALL);

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

		case WM_COMMAND:
			wmId    = LOWORD(wParam); 
			wmEvent = HIWORD(wParam); 
			// Parse the menu selections:
			switch (wmId)
			{
				case IDM_SHOWRAWIMAGE:
					OpenImageFileDlg("��ͼ���ļ�");
					ReadImage(ImgDlgFileName, OrgImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(OrgImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS);
				   break;
				case IDM_SHOWBMPIMAGE:
					OpenImageFileDlg("��ͼ���ļ�");
					ReadBmpImage(ImgDlgFileName, OrgImage);
					ShowBmpImage(OrgImage, ImageWidth, ImageHeight, XPOS, YPOS);
				   break;
				case IDM_1:
					MiddleFilterProcessing(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS+300);
					break;
				case IDM_2:
					LaplaceEdgeProcessing(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS+300);
					break;
				case IDM_3:
					SobelEdgeProcessing(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS+300);
					break;
				case IDM_4:
					PrewittEdgeProcessing(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS+300);
					break;
				case IDM_5:
					RobertsEdgeProcessing(OrgImage, NewImage, IMAGEWIDTH, IMAGEHEIGHT);
					ShowImage(NewImage, IMAGEWIDTH, IMAGEHEIGHT, XPOS, YPOS+300);
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
BOOL ReadImage(LPSTR ImageFileName, char *oImage, int wImage, int hImage) //��ȡͼ����Ϣ��������Image[][]��
{
	OFSTRUCT of;
	HFILE Image_fp;

	Image_fp = OpenFile(ImageFileName, &of, OF_READ);
	if (Image_fp == HFILE_ERROR) 
	{
		MessageBox(NULL, ImageFileName, "���ļ�������Ϣ", MB_OK);
		return FALSE;
	}

	_lread(Image_fp, oImage, wImage*hImage);
	_lclose(Image_fp);

	return TRUE;
}

/************************************************************************************************
*																								*
*   ��ʾRAWͼ��																					*
*																								*
************************************************************************************************/
void ShowImage(char *Image, int wImage, int hImage, int xPos, int yPos)
{
	int i,j;

	for (i=0; i<hImage; i++) {
		for (j=0; j<wImage; j++) {
			SetPixel(hWinDC, j+yPos, i+xPos, RGB(Image[i*wImage+j],Image[i*wImage+j],Image[i*wImage+j]));
		}
	}
}

/************************************************************************************************
*																								*
*   ��BMPͼ���У�����ͼ��ͷ��Ϣ����Ҫ����ͼ�񳤶ȺͿ��											*
*																								*
************************************************************************************************/
BOOL ReadBmpImage(LPSTR ImageFileName, char *oImage)
{ 
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
	ImageHeight= biImage.biHeight;
	if (biImage.biBitCount != 24) {		// 24λ��ɫͼ��
		MessageBox(NULL, NULL, "����24λbmpͼ��", MB_OK);
		return FALSE;
	}

	_llseek(Image_fp, bfImage.bfOffBits, 0);
	_lread(Image_fp, oImage, biImage.biWidth*biImage.biHeight*3);
	_lclose(Image_fp);

	return TRUE;
}

/************************************************************************************************
*																								*
*   ��ʾBMPͼ��																					*
*																								*
************************************************************************************************/
void ShowBmpImage(char *Image, int wImage, int hImage, int xPos, int yPos)
{

}
/************************************************************************************************
*																								*
*   �򿪶��ļ���ϵͳ�Ի���																		*
*																								*
************************************************************************************************/
void OpenImageFileDlg(char *OPDLTitle)
{
	char FileTitle[100];
	OPENFILENAME ofn;

	memset(&ofn,0,sizeof(ofn));
	ofn.lStructSize=sizeof(OPENFILENAME);
	ofn.hwndOwner=NULL;
	ofn.hInstance=NULL;
	ofn.lpstrFilter=TEXT("raw files\0*.raw\0All File\0*.*\0\0");
	ofn.lpstrCustomFilter=NULL;
	ofn.nMaxCustFilter=0;
	ofn.nFilterIndex=1;
	ofn.lpstrFile=ImgDlgFileName;
	ofn.nMaxFile=MAX_PATH;
	ofn.lpstrFileTitle=FileTitle;
	ofn.nMaxFileTitle=99;
	ofn.lpstrInitialDir=ImgDlgFileDir;
	ofn.lpstrTitle=OPDLTitle;
	ofn.Flags=OFN_FILEMUSTEXIST;
	ofn.lpstrDefExt="raw";
	ofn.lCustData=NULL;
	ofn.lpfnHook=NULL;
	ofn.lpTemplateName=NULL;
	ImgDlgFileName[0]='\0';
	GetOpenFileName(&ofn); 

	getcwd(ImgDlgFileDir, MAX_PATH);
}
/************************************************************************************************
*																								*
*   ͼ����ֵ(ͳ��)�˲�����      																*
*																								*
************************************************************************************************/
void MiddleFilterProcessing(char *oImage, char *nImage, int wImage, int hImage)
{	int i, j, m, n, k, l;
	int vSort[32], Middle, MiddlePos; 
	for (i=1; i<hImage-1; i++) {
		for (j=1; j<wImage-1; j++) {l = 0;
		     for (m=-1; m<=1; m++) {				//�õ������9������ֵ
		          for (n=-1; n<=1; n++) {
		 	   vSort[l++] = (BYTE) oImage[(i+m)*wImage+(j+n)];}}
		          for (k=0; k<5; k++) {			//����ֵ
			   Middle = vSort[k]; MiddlePos = k;
			   for (l=k; l<9; l++) {
			        if (Middle > vSort[l]) {Middle = vSort[l]; MiddlePos = l;}}
			        vSort[MiddlePos] = vSort[k]; vSort[k] = Middle;}
		          nImage[i*wImage+j] = (unsigned char) Middle;
}}}
/************************************************************************************************
*																								*
*   ͼ��(3x3ģ�崦��)����																		*
*																								*
************************************************************************************************/
void ImageMaskProcessing(char *oImage, char *nImage, int wImage, int hImage, 
			       int *Mask, int MaskWH, int MaskCoff)
{	int Coff;	int i, j, m, n, k;
	k = (MaskWH-1)/2;
	for (i=k; i<hImage-k; i++) {
  	     for (j=k; j<wImage-k; j++) {
		     Coff = 0; 
		     for (m=-k; m<=k; m++) {
			for (n=-k; n<=k; n++) {
			 Coff+=(BYTE)oImage[(i+m)*wImage+(j+n)]*Mask[(m+k)*MaskWH+(n+k)];
		     }}
		     Coff /= MaskCoff;
		     if (Coff < 0) Coff *= -1;
		     if (Coff > 255) Coff = 255;
		     nImage[i*wImage+j] = (unsigned char) (Coff);
}}}
/************************************************************************************************
*																								*
*   ͼ��(Laplace)��Ե����˲�����																*
*																								*
************************************************************************************************/
void LaplaceEdgeProcessing(char *oImage, char *nImage, 
				      int wImage, int hImage)
{						            
	int Mask[9] = {0, 1, 0, 			//Laplace��Ե���ģ��
			   1,-4, 1, 
			   0, 1, 0};

	ImageMaskProcessing(oImage, nImage, wImage, hImage, Mask, 3, 1);
}
/************************************************************************************************
*																								*
*   ͼ��(Sobel)��Ե����˲�����															     	*
*																								*
************************************************************************************************/
void SobelEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage)
{
    int MaskX[9] = {
        -1, 0, 1,
        -2, 0, 2,
        -1, 0, 1
    };
    int MaskY[9] = {
        -1, -2, -1,
         0,  0,  0,
         1,  2,  1
    };
    // ��ʱͼ�񻺳������ڴ�� Gx �� Gy ���
    char *GxImage = (char *)malloc(wImage * hImage);
    char *GyImage = (char *)malloc(wImage * hImage);
    // ʹ�� ImageMaskProcessing ���� Gx �� Gy
    ImageMaskProcessing(oImage, GxImage, wImage, hImage, MaskX, 3, 1);
    ImageMaskProcessing(oImage, GyImage, wImage, hImage, MaskY, 3, 1);
    // �ϲ� Gx �� Gy ���
    for (int i = 0; i < hImage; i++) {
        for (int j = 0; j < wImage; j++) {
            int gx = (unsigned char)GxImage[i * wImage + j];
            int gy = (unsigned char)GyImage[i * wImage + j];
            int g = abs(gx) + abs(gy);  // �����ݶ�
            if (g > 255) g = 255;
            nImage[i * wImage + j] = (unsigned char)g;
        }
    }
    free(GxImage);
    free(GyImage);
}
/************************************************************************************************
*																								*
*   ͼ��(Prewitt)��Ե����˲�����															    *
*																								*
************************************************************************************************/
void PrewittEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage)
{
    int MaskX[9] = {
        -1,  0,  1,
        -1,  0,  1,
        -1,  0,  1
    };
    int MaskY[9] = {
        -1, -1, -1,
         0,  0,  0,
         1,  1,  1
    };

    // �ֱ�洢 Gx �� Gy �ľ�����
    char *GxImage = (char *)malloc(wImage * hImage);
    char *GyImage = (char *)malloc(wImage * hImage);
    // ͨ�� ImageMaskProcessing �ֱ���� Gx �� Gy
    ImageMaskProcessing(oImage, GxImage, wImage, hImage, MaskX, 3, 1);
    ImageMaskProcessing(oImage, GyImage, wImage, hImage, MaskY, 3, 1);
    // �ϲ� Gx �� Gy �õ��ݶȷ�ֵ
    for (int i = 0; i < hImage; i++) {
        for (int j = 0; j < wImage; j++) {
            int gx = (unsigned char)GxImage[i * wImage + j];
            int gy = (unsigned char)GyImage[i * wImage + j];
            int g = abs(gx) + abs(gy);  // ���ݶȷ�ֵ����
            if (g > 255) g = 255;
            nImage[i * wImage + j] = (unsigned char)g;
        }
    }
    free(GxImage);
    free(GyImage);
}
/************************************************************************************************
*																								*
*   ͼ��(Roberts)��Ե����˲�����															    *
*																								*
************************************************************************************************/
void RobertsEdgeProcessing(char *oImage, char *nImage, int wImage, int hImage)
{
    int gx, gy, g;

    for (int i = 0; i < hImage - 1; i++) {
        for (int j = 0; j < wImage - 1; j++) {
            gx = (unsigned char)oImage[i * wImage + j] -
                 (unsigned char)oImage[(i + 1) * wImage + (j + 1)];

            gy = (unsigned char)oImage[(i + 1) * wImage + j] -
                 (unsigned char)oImage[i * wImage + (j + 1)];

            g = abs(gx) + abs(gy);  // �ݶ�ǿ��

            if (g > 255) g = 255;
            if (g < 0) g = 0;

            nImage[i * wImage + j] = (unsigned char)g;
        }
    }
}

