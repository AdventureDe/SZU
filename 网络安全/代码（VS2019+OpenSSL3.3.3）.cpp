#include <openssl/evp.h>
#include <openssl/rand.h>
#include <openssl/err.h>
#include <openssl/ssl.h>
#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

//AES���ܺ���
bool encrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "�޷��������ļ�: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "�޷���������ļ�: " << output_file << endl;
        return false;
    }
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "��������������ʧ��" << endl;
        return false;
    }

    if (EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key, iv) != 1) {
        cerr << "��ʼ������ʧ��" << endl;
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
                cerr << "��������ʧ��" << endl;
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_EncryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "��ɼ���ʧ��" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);

    EVP_CIPHER_CTX_free(ctx);
    return true;
}

//ctr AES���ܺ���
bool ctr_encrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "�޷��������ļ�: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "�޷���������ļ�: " << output_file << endl;
        return false;
    }
    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "��������������ʧ��" << endl;
        return false;
    }

    if (EVP_EncryptInit_ex(ctx, EVP_aes_256_ctr(), nullptr, key, iv) != 1) {
        cerr << "��ʼ������ʧ��" << endl;
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
                cerr << "��������ʧ��" << endl;
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_EncryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "��ɼ���ʧ��" << endl;
        EVP_CIPHER_CTX_free(ctx);
        return false;
    }

    out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);

    EVP_CIPHER_CTX_free(ctx);
    return true;
}

//AES���ܺ���
bool decrypt_file(const string& input_file, const string& output_file, const unsigned char* key, const unsigned char* iv) {
    ifstream in(input_file, ios::binary);
    if (!in) {
        cerr << "�޷��������ļ�: " << input_file << endl;
        return false;
    }
    ofstream out(output_file, ios::binary);
    if (!out) {
        cerr << "�޷���������ļ�: " << output_file << endl;
        return false;
    }

    EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
    if (!ctx) {
        cerr << "��������������ʧ��" << endl;
        return false;
    }

    if (EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr, key, iv) != 1)
    {
        cerr << "��ʼ������ʧ��" << endl;
        ERR_print_errors_fp(stderr);  // ��ӡ OpenSSL ����
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
                cerr << "��������ʧ��" << endl;
                ERR_print_errors_fp(stderr);  // ��ӡ OpenSSL ����
                EVP_CIPHER_CTX_free(ctx);
                return false;
            }
            out.write(reinterpret_cast<char*>(out_buffer.data()), out_len);
        }
    }

    if (EVP_DecryptFinal_ex(ctx, out_buffer.data(), &out_len) != 1) {
        cerr << "��ɽ���ʧ��" << endl;
        ERR_print_errors_fp(stderr);  // ��ӡ OpenSSL ����
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
    //    cout << "���ܳɹ�" << endl;
    //}
    //else {
    //    cerr << "����ʧ��" << endl;
    //    return 1;
    //}
    if (ctr_encrypt_file(input_file, output_file, key, iv)) {
        cout << "���ܳɹ�" << endl;
    }
    else {
        cerr << "����ʧ��" << endl;
        return 1;
    }
    return 0;
    const string decrypted_input = "C:/Users/MasterRin/Desktop/test_output.mp3"; // ���ܺ���ļ�
    const string decrypted_output = "C:/Users/MasterRin/Desktop/test_decrypted.mp3"; // ���ܺ���ļ�
    cout << decrypted_input << "->" << decrypted_output << endl;
    if (decrypt_file(decrypted_input, decrypted_output, key, iv)) {
        cout << "���ܳɹ�" << endl;
    }
    else {
        ERR_print_errors_fp(stderr);
        cerr << "����ʧ��" << endl;
        return 1;
    }

    return 0;
}
