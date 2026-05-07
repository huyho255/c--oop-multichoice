# Câu sai

- Thời gian chấm: 19:50:28 30/4/2026
- File đề: kiem-tra-tren-lop-1.md
- Điểm: 16/20

## Câu sai 1
Chủ đề: Cấu trúc chương trình
Phần nào của chương trình C# chứa điểm bắt đầu của chương trình?

- [ ] Namespace
- [ ] Phương thức
- [ ] Class
- [x] Hàm Main

- Bạn chọn: A. Namespace
- Đáp án đúng: D. Hàm Main
> Giải thích: Chương trình C# console bắt đầu chạy từ `Main`.

## Câu sai 2
Chủ đề: Constructor
Phương thức nào trong C# được gọi tự động khi một đối tượng được tạo ra?

- [ ] Instance method
- [x] Constructor
- [ ] Destructor
- [ ] Static method

- Bạn chọn: A. Instance method
- Đáp án đúng: B. Constructor
> Giải thích: Constructor được gọi khi tạo object bằng `new`.

## Câu sai 3
Chủ đề: Reference type
Cho biết đoạn chương trình sau in ra kết quả bao nhiêu?

```csharp
using System;
namespace CSharp
{
    class Program
    {
        static void Main()
        {
            MyClass obj1 = new MyClass();
            obj1.Value = 50;
            MyClass obj2 = obj1;
            obj2.Value = 100;
            Console.WriteLine(obj1.Value);
        }
    }

    class MyClass
    {
        public int Value;
    }
}
```

- [ ] Không xác định được
- [x] 100
- [ ] 0
- [ ] 50

- Bạn chọn: D. 50
- Đáp án đúng: B. 100
> Giải thích: `obj1` và `obj2` cùng tham chiếu đến một object nên thay đổi qua `obj2` cũng ảnh hưởng `obj1`.

## Câu sai 4
Chủ đề: Method overloading
Đoạn mã sau có hợp lệ không?

```csharp
class MyClass
{
    public void Display(int x)
    {
        Console.WriteLine(x);
    }

    public void Display(string y)
    {
        Console.WriteLine(y);
    }
}
```

- [ ] Không hợp lệ, phương thức `Display` phải có từ khóa `static`
- [x] Hợp lệ
- [ ] Không hợp lệ, kiểu dữ liệu của tham số phải giống nhau
- [ ] Không hợp lệ, phương thức `Display` bị trùng lặp

- Bạn chọn: D. Không hợp lệ, phương thức `Display` bị trùng lặp
- Đáp án đúng: B. Hợp lệ
> Giải thích: Đây là overload hợp lệ vì hai phương thức cùng tên nhưng khác kiểu tham số.
