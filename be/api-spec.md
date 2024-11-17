### API Spesifikasi Aplikasi Pengelolaan Keuangan Pribadi

#### 1. Autentikasi
**Endpoint: POST /api/auth/register**
- **Deskripsi**: Mendaftarkan pengguna baru.
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Respon**:
  ```json
  {
    "message": "User registered successfully",
    "user_id": "user123"
  }
  ```

**Endpoint: POST /api/auth/login**
- **Deskripsi**: Login pengguna.
- **Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Respon**:
  ```json
  {
    "token": "jwt_token",
    "user_id": "user123"
  }
  ```

#### 2. Transaksi
**Endpoint: GET /api/transactions**
- **Deskripsi**: Mendapatkan semua transaksi pengguna.
- **Headers**:
  - Authorization: Bearer `jwt_token`
- **Respon**:
  ```json
  [
    {
      "id": "txn789",
      "user_id": "user123",
      "type": "expense",
      "amount": 500,
      "category": "Groceries",
      "description": "Belanja bulanan",
      "date": "2024-11-15T09:30:00Z"
    },
    {
      "id": "txn790",
      "user_id": "user123",
      "type": "income",
      "amount": 1500,
      "category": "Salary",
      "description": "Gaji bulan November",
      "date": "2024-11-01T08:00:00Z"
    }
  ]
  ```

**Endpoint: POST /api/transactions**
- **Deskripsi**: Menambahkan transaksi baru.
- **Headers**:
  - Authorization: Bearer `jwt_token`
- **Body**:
  ```json
  {
    "type": "expense",
    "amount": 300,
    "category": "Transport",
    "description": "Ongkos perjalanan",
    "date": "2024-11-16T07:30:00Z"
  }
  ```
- **Respon**:
  ```json
  {
    "message": "Transaction added successfully",
    "transaction_id": "txn791"
  }
  ```

**Endpoint: PUT /api/transactions/:id**
- **Deskripsi**: Mengedit transaksi.
- **Headers**:
  - Authorization: Bearer `jwt_token`
- **Body**:
  ```json
  {
    "amount": 400,
    "description": "Ongkos perjalanan diperbarui"
  }
  ```
- **Respon**:
  ```json
  {
    "message": "Transaction updated successfully"
  }
  ```

**Endpoint: DELETE /api/transactions/:id**
- **Deskripsi**: Menghapus transaksi.
- **Headers**:
  - Authorization: Bearer `jwt_token`
- **Respon**:
  ```json
  {
    "message": "Transaction deleted successfully"
  }
  ```

#### 3. Statistik
**Endpoint: GET /api/statistics**
- **Deskripsi**: Mendapatkan ringkasan statistik keuangan pengguna.
- **Headers**:
  - Authorization: Bearer `jwt_token`
- **Respon**:
  ```json
  {
    "total_income": 5000,
    "total_expense": 3000,
    "balance": 2000,
    "monthly_summary": [
      { "month": "October", "income": 4000, "expense": 1500 },
      { "month": "November", "income": 1000, "expense": 500 }
    ]
  }
  ```

#### 4. Kategori
**Endpoint: GET /api/categories**
- **Deskripsi**: Mendapatkan daftar kategori transaksi.
- **Respon**:
  ```json
  [
    { "id": "cat1", "name": "Groceries", "type": "expense" },
    { "id": "cat2", "name": "Salary", "type": "income" }
  ]
  ```

---
