#include <openssl/evp.h>
#include <openssl/rand.h>
#include <openssl/err.h>
#include <openssl/ssl.h>
#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

//AES加密函数
bool encrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "无法打开输入文件: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "无法创建输出文件: " << output_file << endl;
        return false;
    }
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "创建加密上下文失败" << endl;
        return false;
    }

    if (EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key, iv) != 1) {
        cerr << "初始化加密失败" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    vector<unsigned char> buffer(4096);
    vector<unsigned char> out_buffer(4096 + EVP_CIPHER_block_size(EVP_aes_256_cbc()));
    int out_len = 0;

    while (in)
    {
        in.read(reinterpret_cast<char*>(buffer.data()), buffer.size());
        streamsize bytes_read = in.gcount();
        if (bytes_read > 0)
        {
            if (EVP_EncryptUpdate(ctx, out_buffer.data(), &out_len, buffer.data(), bytes_read) != 1)
            {
                cerr << "加密数据失败" << endl;
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_EncryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "完成加密失败" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);

    EVP_CIPHER_CTX_free(ctx);
    return true;
}

//ctr AES加密函数
bool ctr_encrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "无法打开输入文件: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "无法创建输出文件: " << output_file << endl;
        return false;
    }
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "创建加密上下文失败" << endl;
        return false;
    }

    if (EVP_EncryptInit_ex(ctx, EVP_aes_256_ctr(), nullptr, key, iv) != 1) {
        cerr << "初始化加密失败" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    vector<unsigned char> buffer(4096);
    vector<unsigned char> out_buffer(4096 + EVP_CIPHER_block_size(EVP_aes_256_cbc()));
    int out_len = 0;

    while (in)
    {
        in.read(reinterpret_cast<char*>(buffer.data()), buffer.size());
        streamsize bytes_read = in.gcount();
        if (bytes_read > 0)
        {
            if (EVP_EncryptUpdate(ctx, out_buffer.data(), &out_len, buffer.data(), bytes_read) != 1)
            {
                cerr << "加密数据失败" << endl;
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_EncryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "完成加密失败" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);

    EVP_CIPHER_CTX_free(ctx);
    return true;
}

//AES解密函数
bool decrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "无法打开输入文件: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "无法创建输出文件: " << output_file << endl;
        return false;
    }

    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "创建解密上下文失败" << endl;
        return false;
    }

    if (EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key, iv) != 1)
    {
        cerr << "初始化解密失败" << endl;
        ERR_print_errors_fp(stderr);  // 打印 OpenSSL 错误
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    vector<unsigned char> buffer(4096);
    vector<unsigned char> out_buffer(4096 + EVP_CIPHER_block_size(EVP_aes_256_cbc()));
    int out_len = 0;

    while (in) {
        in.read(reinterpret_cast<char*>(buffer.data()), buffer.size());
        streamsize bytes_read = in.gcount();

        if (bytes_read > 0) {
            if (EVP_DecryptUpdate(ctx, out_buffer.data(), &out_len, buffer.data(), bytes_read) != 1) {
                cerr << "解密数据失败" << endl;
                ERR_print_errors_fp(stderr);  // 打印 OpenSSL 错误
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_DecryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "完成解密失败" << endl;
        ERR_print_errors_fp(stderr);  // 打印 OpenSSL 错误
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);

    EVP_CIPHER_CTX_free(ctx);
    return true;
}

int main() {
    OPENSSL_init_crypto(OPENSSL_INIT_LOAD_CRYPTO_STRINGS, nullptr);
    OpenSSL_add_all_algorithms();
    OPENSSL_init_ssl(0, nullptr);

    const string input_file = "C:/Users/MasterRin/Desktop/test.jpg";
    const string output_file = "C:/Users/MasterRin/Desktop/test_output.jpg";
    unsigned char key[32];
    unsigned char iv[16];
    cout << input_file << "->" << output_file << endl;
    //if (encrypt_file(input_file, output_file, key, iv)) {
    //    cout << "加密成功" << endl;
    //}
    //else {
    //    cerr << "加密失败" << endl;
    //    return 1;
    //}
    if (ctr_encrypt_file(input_file, output_file, key, iv)) {
        cout << "加密成功" << endl;
    }
    else {
        cerr << "加密失败" << endl;
        return 1;
    }
    return 0;
    const string decrypted_input = "C:/Users/MasterRin/Desktop/test_output.mp3"; // 加密后的文件
    const string decrypted_output = "C:/Users/MasterRin/Desktop/test_decrypted.mp3"; // 解密后的文件
    cout << decrypted_input << "->" << decrypted_output << endl;
    if (decrypt_file(decrypted_input, decrypted_output, key, iv)) {
        cout << "解密成功" << endl;
    }
    else {
        ERR_print_errors_fp(stderr);
        cerr << "解密失败" << endl;
        return 1;
    }

    return 0;
}
