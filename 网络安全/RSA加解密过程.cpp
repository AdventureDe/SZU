#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/err.h>
#include <iostream>
#include <cstring>

void rsa_encrypt_decrypt_demo() {
    // 1. 生成 RSA 密钥对
    EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new_from_name(NULL, "RSA", NULL);
    EVP_PKEY* pkey = NULL;
    EVP_PKEY_keygen_init(ctx);
    EVP_PKEY_CTX_set_rsa_keygen_bits(ctx, 2048);
    EVP_PKEY_keygen(ctx, &pkey);
    EVP_PKEY_CTX_free(ctx);

    const char* plaintext = "Hello, how are you?!";
    size_t plen = strlen(plaintext);

    // 2. 公钥加密
    EVP_PKEY_CTX* enc_ctx = EVP_PKEY_CTX_new(pkey, NULL);
    EVP_PKEY_encrypt_init(enc_ctx);
    EVP_PKEY_CTX_set_rsa_padding(enc_ctx, RSA_PKCS1_OAEP_PADDING);
    size_t outlen = 0;
    EVP_PKEY_encrypt(enc_ctx, NULL, &outlen, (const unsigned char*)plaintext, plen);

    unsigned char* encrypted = new unsigned char[outlen];
    EVP_PKEY_encrypt(enc_ctx, encrypted, &outlen, (const unsigned char*)plaintext, plen);
    EVP_PKEY_CTX_free(enc_ctx);

    // 3. 私钥解密
    EVP_PKEY_CTX* dec_ctx = EVP_PKEY_CTX_new(pkey, NULL);
    EVP_PKEY_decrypt_init(dec_ctx);
    EVP_PKEY_CTX_set_rsa_padding(dec_ctx, RSA_PKCS1_OAEP_PADDING);
    size_t declen = 0;
    EVP_PKEY_decrypt(dec_ctx, NULL, &declen, encrypted, outlen);

    unsigned char* decrypted = new unsigned char[declen + 1];
    EVP_PKEY_decrypt(dec_ctx, decrypted, &declen, encrypted, outlen);
    decrypted[declen] = '\0';
    EVP_PKEY_CTX_free(dec_ctx);

    std::cout << "原文: " << plaintext << std::endl;
    std::cout << "解密后: " << decrypted << std::endl;

    delete[] encrypted;
    delete[] decrypted;
    EVP_PKEY_free(pkey);
}
int main()
{
    rsa_encrypt_decrypt_demo();
    return 0;
}
