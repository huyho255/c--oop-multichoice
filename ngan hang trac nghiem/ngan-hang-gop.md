# Kiá»ƒm tra trÃªn lá»›p 1

## CÃ¢u 1
Chá»§ Ä‘á»: CÃº phÃ¡p cÆ¡ báº£n
Äoáº¡n mÃ£ sau cÃ³ lá»—i gÃ¬?

```csharp
using System;
class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

- [ ] Thiáº¿u dáº¥u cháº¥m pháº©y sau `Console.WriteLine`
- [x] KhÃ´ng cÃ³ lá»—i
- [ ] Thiáº¿u dáº¥u ngoáº·c nhá»n Ä‘Ã³ng `}`
- [ ] Thiáº¿u tá»« khÃ³a `namespace`

> Giáº£i thÃ­ch: Äoáº¡n mÃ£ nÃ y há»£p lá»‡ vÃ  cÃ³ thá»ƒ cháº¡y bÃ¬nh thÆ°á»ng.

## CÃ¢u 2
Chá»§ Ä‘á»: CÃº phÃ¡p Ä‘iá»u kiá»‡n
Äoáº¡n mÃ£ sau cÃ³ lá»—i gÃ¬?

```csharp
int x = 10;
if (x > 5)
{
    Console.WriteLine("x is greater than 5");
}
else
{
    Console.WriteLine("x is less than or equal to 5");
}
```

- [ ] Thiáº¿u tá»« khÃ³a `class` trÆ°á»›c `if`
- [ ] Thiáº¿u tá»« khÃ³a `static` trÆ°á»›c `int x`
- [x] KhÃ´ng cÃ³ lá»—i
- [ ] Khai bÃ¡o kiá»ƒu dá»¯ liá»‡u biáº¿n `x` bá»‹ sai

> Giáº£i thÃ­ch: Cáº¥u trÃºc `if/else` vÃ  khai bÃ¡o biáº¿n á»Ÿ Ä‘Ã¢y lÃ  Ä‘Ãºng.

## CÃ¢u 3
Chá»§ Ä‘á»: Namespace
Namespace trong C# Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ lÃ m gÃ¬?

- [ ] Äá»‹nh nghÄ©a má»™t class
- [ ] Äá»‹nh nghÄ©a má»™t phÆ°Æ¡ng thá»©c
- [ ] Äá»‹nh nghÄ©a má»™t biáº¿n
- [x] Tá»• chá»©c cÃ¡c class vÃ  cÃ¡c kiá»ƒu dá»¯ liá»‡u khÃ¡c

> Giáº£i thÃ­ch: Namespace giÃºp nhÃ³m vÃ  tá»• chá»©c cÃ¡c kiá»ƒu dá»¯ liá»‡u, trÃ¡nh trÃ¹ng tÃªn.

## CÃ¢u 4
Chá»§ Ä‘á»: Field
Field trong C# lÃ  gÃ¬?

- [ ] LÃ  hÃ m con trong lá»›p
- [x] Má»™t biáº¿n Ä‘Æ°á»£c khai bÃ¡o bÃªn ngoÃ i cÃ¡c phÆ°Æ¡ng thá»©c nhÆ°ng bÃªn trong má»™t class
- [ ] Má»™t kiá»ƒu dá»¯ liá»‡u
- [ ] Má»™t khÃ´ng gian tÃªn

> Giáº£i thÃ­ch: Field lÃ  biáº¿n thÃ nh viÃªn cá»§a lá»›p.

## CÃ¢u 5
Chá»§ Ä‘á»: Constructor
Äoáº¡n mÃ£ sau cÃ³ há»£p lá»‡ khÃ´ng?

```csharp
using System;
class MyClass
{
    public MyClass()
    {
        WriteLine("Constructor called");
    }
}
```

- [x] KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `WriteLine` cáº§n pháº£i truy xuáº¥t tá»« lá»›p `Console`
- [ ] KhÃ´ng há»£p lá»‡, thiáº¿u tá»« khÃ³a `static`
- [ ] KhÃ´ng há»£p lá»‡, thiáº¿u tá»« khÃ³a `void`
- [ ] Há»£p lá»‡

> Giáº£i thÃ­ch: Cáº§n viáº¿t `Console.WriteLine("Constructor called");`.

## CÃ¢u 6
Chá»§ Ä‘á»: Enum
Chá»n phÃ¡t biá»ƒu Ä‘Ãºng?

```csharp
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
```

- [ ] Enum `Days` vá»›i cÃ¡c giÃ¡ trá»‹ tá»« `"Sun"` Ä‘áº¿n `"Sat"`
- [x] Enum `Days` vá»›i cÃ¡c giÃ¡ trá»‹ tá»« `0` Ä‘áº¿n `6`
- [ ] Enum `Days` vá»›i cÃ¡c giÃ¡ trá»‹ tá»« `1` Ä‘áº¿n `7`
- [ ] Enum `Days` vá»›i cÃ¡c giÃ¡ trá»‹ tá»« `"Sunday"` Ä‘áº¿n `"Saturday"`

> Giáº£i thÃ­ch: Máº·c Ä‘á»‹nh cÃ¡c pháº§n tá»­ enum cÃ³ giÃ¡ trá»‹ sá»‘ nguyÃªn báº¯t Ä‘áº§u tá»« `0`.

## CÃ¢u 7
Chá»§ Ä‘á»: Constructor
Constructor trong C# cÃ³ Ä‘áº·c Ä‘iá»ƒm gÃ¬?

- [ ] KhÃ´ng thá»ƒ bá»‹ ghi Ä‘Ã¨
- [x] CÃ³ cÃ¹ng tÃªn vá»›i class
- [ ] KhÃ´ng cÃ³ tham sá»‘
- [ ] CÃ³ thá»ƒ cÃ³ báº¥t ká»³ tÃªn nÃ o

> Giáº£i thÃ­ch: Constructor pháº£i cÃ³ cÃ¹ng tÃªn vá»›i lá»›p.

## CÃ¢u 8
Chá»§ Ä‘á»: Class
Class trong C# lÃ  gÃ¬?

- [ ] Má»™t kiá»ƒu dá»¯ liá»‡u cÆ¡ báº£n
- [ ] Má»™t biáº¿n
- [ ] Má»™t phÆ°Æ¡ng thá»©c
- [x] Má»™t kiá»ƒu dá»¯ liá»‡u tham chiáº¿u

> Giáº£i thÃ­ch: `class` lÃ  kiá»ƒu dá»¯ liá»‡u tham chiáº¿u trong C#.

## CÃ¢u 9
Chá»§ Ä‘á»: Biáº¿n vÃ  gÃ¡n giÃ¡ trá»‹
Cho biáº¿t giÃ¡ trá»‹ in ra cá»§a Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh sau.

```csharp
int x = 10;
int y = x;
y = 20;
Console.WriteLine(x);
```

- [ ] 0
- [ ] 20
- [x] 10
- [ ] KhÃ´ng xÃ¡c Ä‘á»‹nh giÃ¡ trá»‹

> Giáº£i thÃ­ch: `y` nháº­n báº£n sao giÃ¡ trá»‹ cá»§a `x` lÃ  `10`. Sau Ä‘Ã³ Ä‘á»•i `y = 20` khÃ´ng lÃ m thay Ä‘á»•i `x`, nÃªn khi in `x` káº¿t quáº£ váº«n lÃ  `10`.

## CÃ¢u 10
Chá»§ Ä‘á»: Constructor
PhÆ°Æ¡ng thá»©c nÃ o trong C# Ä‘Æ°á»£c gá»i tá»± Ä‘á»™ng khi má»™t Ä‘á»‘i tÆ°á»£ng Ä‘Æ°á»£c táº¡o ra?

- [ ] Instance method
- [x] Constructor
- [ ] Destructor
- [ ] Static method

> Giáº£i thÃ­ch: Constructor Ä‘Æ°á»£c gá»i khi táº¡o object báº±ng `new`.

## CÃ¢u 11
Chá»§ Ä‘á»: Method overloading
PhÆ°Æ¡ng thá»©c nÃ o KHÃ”NG Ä‘Æ°á»£c phÃ©p khai bÃ¡o cÃ¹ng tÃªn trong cÃ¹ng má»™t lá»›p vá»›i phÆ°Æ¡ng thá»©c sau?

```csharp
int Add(int a, int b)
```

- [ ] `void Add()`
- [x] `float Add(int a, int b)`
- [ ] `float Add(float a, float b)`
- [ ] `int Add(int a, int b, int c)`

> Giáº£i thÃ­ch: KhÃ´ng thá»ƒ overload chá»‰ báº±ng cÃ¡ch Ä‘á»•i kiá»ƒu tráº£ vá» náº¿u danh sÃ¡ch tham sá»‘ váº«n giá»¯ nguyÃªn.

## CÃ¢u 12
Chá»§ Ä‘á»: Field
Äoáº¡n mÃ£ sau khai bÃ¡o field nÃ o?

```csharp
class MyClass
{
    public int x;
    private string y;
}
```

- [ ] `x` lÃ  field tÄ©nh, `y` lÃ  field tÄ©nh
- [ ] `x` lÃ  field riÃªng tÆ°, `y` lÃ  field cÃ´ng khai
- [ ] `x` vÃ  `y` Ä‘á»u lÃ  field cÃ´ng khai
- [x] `x` lÃ  field cÃ´ng khai, `y` lÃ  field riÃªng tÆ°

> Giáº£i thÃ­ch: `public int x;` lÃ  field cÃ´ng khai, cÃ²n `private string y;` lÃ  field riÃªng tÆ°.

## CÃ¢u 13
Chá»§ Ä‘á»: Kiá»ƒu dá»¯ liá»‡u
ÄÃ¢u lÃ  kiá»ƒu dá»¯ liá»‡u tham chiáº¿u?

- [ ] `int`
- [x] `class`
- [ ] `float`
- [ ] `bool`

> Giáº£i thÃ­ch: `class` lÃ  kiá»ƒu tham chiáº¿u, cÃ²n `int`, `float`, `bool` lÃ  kiá»ƒu giÃ¡ trá»‹.

## CÃ¢u 14
Chá»§ Ä‘á»: Kiá»ƒu dá»¯ liá»‡u
Äoáº¡n mÃ£ sau khai bÃ¡o kiá»ƒu dá»¯ liá»‡u nÃ o? `double x = 10.5;`

- [ ] Kiá»ƒu dá»¯ liá»‡u tham chiáº¿u
- [x] Kiá»ƒu dá»¯ liá»‡u sá»‘ thá»±c
- [ ] Kiá»ƒu dá»¯ liá»‡u chuá»—i
- [ ] Kiá»ƒu dá»¯ liá»‡u sá»‘ nguyÃªn

> Giáº£i thÃ­ch: `double` lÃ  kiá»ƒu sá»‘ thá»±c dáº¥u pháº©y Ä‘á»™ng.

## CÃ¢u 15
Chá»§ Ä‘á»: Class vÃ  object
Cho biáº¿t lá»—i sai trong chÆ°Æ¡ng trÃ¬nh sau.

```csharp
using System;
namespace CSharp
{
    class Program
    {
        static void Main()
        {
            Person p1;
            p1.Name = "John";
            p1.Age = 30;
        }
    }

    class Person
    {
        public string Name;
        public int Age;
    }
}
```

- [ ] Lá»›p `Person` chÆ°a táº¡o phÆ°Æ¡ng thá»©c nÃ o
- [ ] ChÆ°Æ¡ng trÃ¬nh khÃ´ng cÃ³ lá»—i
- [x] Äá»‘i tÆ°á»£ng `p1` chÆ°a Ä‘Æ°á»£c khá»Ÿi táº¡o báº±ng tá»« khÃ³a `new`
- [ ] Lá»›p `Person` chÆ°a Ä‘Æ°á»£c khai bÃ¡o constructor

> Giáº£i thÃ­ch: Cáº§n táº¡o object trÆ°á»›c, vÃ­ dá»¥ `Person p1 = new Person();`.

## CÃ¢u 16
Chá»§ Ä‘á»: Using vÃ  Console
Äoáº¡n mÃ£ sau cÃ³ lá»—i gÃ¬?

```csharp
class MyClass
{
    public void Display()
    {
        Console.WriteLine("Hello");
    }
}
```

- [x] Thiáº¿u `using System;`
- [ ] Thiáº¿u tá»« khÃ³a `class` trÆ°á»›c `MyClass`
- [ ] Thiáº¿u tá»« khÃ³a `static` trÆ°á»›c phÆ°Æ¡ng thá»©c `Display`
- [ ] Thiáº¿u dáº¥u cháº¥m pháº©y sau `Console.WriteLine`

> Giáº£i thÃ­ch: Náº¿u khÃ´ng dÃ¹ng tÃªn Ä‘áº§y Ä‘á»§ `System.Console`, cáº§n cÃ³ `using System;`.

## CÃ¢u 17
Chá»§ Ä‘á»: Cáº¥u trÃºc chÆ°Æ¡ng trÃ¬nh
Pháº§n nÃ o cá»§a chÆ°Æ¡ng trÃ¬nh C# chá»©a Ä‘iá»ƒm báº¯t Ä‘áº§u cá»§a chÆ°Æ¡ng trÃ¬nh?

- [ ] Namespace
- [ ] PhÆ°Æ¡ng thá»©c
- [ ] Class
- [x] HÃ m Main

> Giáº£i thÃ­ch: ChÆ°Æ¡ng trÃ¬nh C# console báº¯t Ä‘áº§u cháº¡y tá»« `Main`.

## CÃ¢u 18
Chá»§ Ä‘á»: Method overloading
Äoáº¡n mÃ£ sau cÃ³ há»£p lá»‡ khÃ´ng?

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

- [ ] KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `Display` pháº£i cÃ³ tá»« khÃ³a `static`
- [x] Há»£p lá»‡
- [ ] KhÃ´ng há»£p lá»‡, kiá»ƒu dá»¯ liá»‡u cá»§a tham sá»‘ pháº£i giá»‘ng nhau
- [ ] KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `Display` bá»‹ trÃ¹ng láº·p

> Giáº£i thÃ­ch: ÄÃ¢y lÃ  overload há»£p lá»‡ vÃ¬ hai phÆ°Æ¡ng thá»©c cÃ¹ng tÃªn nhÆ°ng khÃ¡c kiá»ƒu tham sá»‘.

## CÃ¢u 19
Chá»§ Ä‘á»: Reference type
Cho biáº¿t Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh sau in ra káº¿t quáº£ bao nhiÃªu?

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

- [ ] KhÃ´ng xÃ¡c Ä‘á»‹nh Ä‘Æ°á»£c
- [x] 100
- [ ] 0
- [ ] 50

> Giáº£i thÃ­ch: `obj1` vÃ  `obj2` cÃ¹ng tham chiáº¿u Ä‘áº¿n má»™t object nÃªn thay Ä‘á»•i qua `obj2` cÅ©ng áº£nh hÆ°á»Ÿng `obj1`.

## CÃ¢u 20
Chá»§ Ä‘á»: Constructor
Äoáº¡n mÃ£ sau cÃ³ lá»—i gÃ¬?

```csharp
class MyClass
{
    int x;

    public MyClass(int y)
    {
        x = y;
    }
}
```

- [ ] Thiáº¿u tá»« khÃ³a `void` trÆ°á»›c `MyClass`
- [ ] Thiáº¿u tá»« khÃ³a `static` trÆ°á»›c `class`
- [x] KhÃ´ng cÃ³ lá»—i
- [ ] Thiáº¿u tá»« khÃ³a `public` trÆ°á»›c `int x`

> Giáº£i thÃ­ch: ÄÃ¢y lÃ  má»™t constructor há»£p lá»‡ cÃ³ tham sá»‘.
# Kiá»ƒm tra trÃªn lá»›p 2

## CÃ¢u 1
Chá»§ Ä‘á»: Static
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» static fields trong má»™t class?

- [x] Static fields cÃ³ thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o trong static constructor hoáº·c táº¡i thá»i Ä‘iá»ƒm khai bÃ¡o.
- [ ] Static fields chá»‰ cÃ³ thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o trong static constructor.
- [ ] Static fields chá»‰ cÃ³ thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o trong non-static constructor.
- [ ] Static fields khÃ´ng thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o táº¡i thá»i Ä‘iá»ƒm khai bÃ¡o.

> Giáº£i thÃ­ch: Static fields cÃ³ thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o lÃºc khai bÃ¡o hoáº·c trong static constructor.

## CÃ¢u 2
Chá»§ Ä‘á»: Static
Äiá»u gÃ¬ xáº£y ra náº¿u báº¡n thay Ä‘á»•i giÃ¡ trá»‹ cá»§a má»™t static field tá»« má»™t object cá»§a class?

- [x] GiÃ¡ trá»‹ cá»§a static field sáº½ thay Ä‘á»•i cho táº¥t cáº£ cÃ¡c object cá»§a class.
- [ ] GiÃ¡ trá»‹ cá»§a static field sáº½ chá»‰ thay Ä‘á»•i cho object Ä‘Ã³.
- [ ] GiÃ¡ trá»‹ cá»§a static field sáº½ thay Ä‘á»•i nhÆ°ng sáº½ gÃ¢y ra lá»—i runtime.
- [ ] GiÃ¡ trá»‹ cá»§a static field sáº½ khÃ´ng thay Ä‘á»•i.

> Giáº£i thÃ­ch: ThÃ nh pháº§n static Ä‘Æ°á»£c dÃ¹ng chung cho toÃ n bá»™ class.

## CÃ¢u 3
Chá»§ Ä‘á»: Static constructor
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» static constructors trong má»™t class?

- [ ] Static constructors cÃ³ thá»ƒ Ä‘Æ°á»£c gá»i nhiá»u láº§n trong suá»‘t thá»i gian cháº¡y cá»§a chÆ°Æ¡ng trÃ¬nh.
- [x] Static constructors khÃ´ng thá»ƒ cÃ³ tham sá»‘.
- [ ] Static constructors cÃ³ thá»ƒ cÃ³ tham sá»‘.
- [ ] Static constructors cÃ³ thá»ƒ Ä‘Æ°á»£c gá»i trá»±c tiáº¿p tá»« bÃªn ngoÃ i class.

> Giáº£i thÃ­ch: Static constructor khÃ´ng cÃ³ tham sá»‘ vÃ  khÃ´ng Ä‘Æ°á»£c gá»i trá»±c tiáº¿p.

## CÃ¢u 4
Chá»§ Ä‘á»: Properties
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» automatic properties trong C#?

- [x] Automatic properties tá»± Ä‘á»™ng táº¡o ra cÃ¡c trÆ°á»ng áº©n Ä‘á»ƒ lÆ°u trá»¯ giÃ¡ trá»‹.
- [ ] Automatic properties khÃ´ng thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o.
- [ ] Automatic properties khÃ´ng thá»ƒ cÃ³ phÆ°Æ¡ng thá»©c set.
- [ ] Automatic properties khÃ´ng thá»ƒ cÃ³ phÆ°Æ¡ng thá»©c get.

> Giáº£i thÃ­ch: Auto-property cÃ³ backing field áº©n do compiler táº¡o.

## CÃ¢u 5
Chá»§ Ä‘á»: Properties
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» properties trong C#?

- [ ] Properties chá»‰ cÃ³ thá»ƒ cÃ³ phÆ°Æ¡ng thá»©c get.
- [x] Properties cÃ³ thá»ƒ cÃ³ cáº£ phÆ°Æ¡ng thá»©c get vÃ  set.
- [ ] Properties khÃ´ng thá»ƒ cÃ³ phÆ°Æ¡ng thá»©c get hoáº·c set.
- [ ] Properties chá»‰ cÃ³ thá»ƒ cÃ³ phÆ°Æ¡ng thá»©c set.

> Giáº£i thÃ­ch: Property cÃ³ thá»ƒ chá»‰ cÃ³ get, chá»‰ cÃ³ set, hoáº·c cÃ³ cáº£ hai.

## CÃ¢u 6
Chá»§ Ä‘á»: Static methods
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» static methods trong má»™t class?

- [x] Static methods khÃ´ng thá»ƒ Ä‘Æ°á»£c override trong cÃ¡c class con.
- [ ] Static methods cÃ³ thá»ƒ truy cáº­p cÃ¡c thÃ nh pháº§n non-static cá»§a class.
- [ ] Static methods khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn ngoÃ i class.
- [ ] Static methods cÃ³ thá»ƒ Ä‘Æ°á»£c truy xuáº¥t á»Ÿ cáº¥p Ä‘á»™ lá»›p hoáº·c cáº¥p Ä‘á»™ object.

> Giáº£i thÃ­ch: Static method khÃ´ng tham gia cÆ¡ cháº¿ override nhÆ° instance method.

## CÃ¢u 7
Chá»§ Ä‘á»: Properties
Äiá»u gÃ¬ xáº£y ra náº¿u báº¡n khai bÃ¡o má»™t property vá»›i phÆ°Æ¡ng thá»©c get nhÆ°ng khÃ´ng cÃ³ phÆ°Æ¡ng thá»©c set?

- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘á»c giÃ¡ trá»‹.
- [x] Property sáº½ chá»‰ cÃ³ thá»ƒ Ä‘á»c giÃ¡ trá»‹.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn ngoÃ i class.

> Giáº£i thÃ­ch: Property chá»‰ cÃ³ getter lÃ  read-only trong ngá»¯ cáº£nh thÃ´ng thÆ°á»ng.

## CÃ¢u 8
Chá»§ Ä‘á»: Static methods
Lá»—i sai trong Ä‘oáº¡n code trÃªn sau gÃ¬?

```csharp
public class MathOperations
{
    public static int Multiply(int a, int b)
    {
        return a * b;
    }

    public int Divide(int a, int b)
    {
        return a / b;
    }
}

class Program
{
    static void Main(string[] args)
    {
        MathOperations operations = new MathOperations();
        int result1 = operations.Multiply(6, 2);
        int result2 = MathOperations.Divide(6, 2);
        Console.WriteLine(result1);
        Console.WriteLine(result2);
    }
}
```

- [x] KhÃ´ng thá»ƒ gá»i phÆ°Æ¡ng thá»©c Multiply tá»« Ä‘á»‘i tÆ°á»£ng operations
- [ ] KhÃ´ng thá»ƒ gá»i phÆ°Æ¡ng thá»©c Divide tá»« lá»›p MathOperations
- [ ] PhÆ°Æ¡ng thá»©c Multiply khÃ´ng tráº£ vá» giÃ¡ trá»‹ Ä‘Ãºng
- [ ] KhÃ´ng cÃ³ lá»—i

> Giáº£i thÃ­ch: Theo Ä‘Ã¡p Ã¡n trong PDF, lá»—i Ä‘Æ°á»£c chá»n lÃ  gá»i `Multiply` tá»« object `operations`.

## CÃ¢u 9
Chá»§ Ä‘á»: Static constructor
Static constructor Ä‘Æ°á»£c gá»i bao nhiÃªu láº§n trong Ä‘oáº¡n code sau?

```csharp
public class Logger
{
    public static string LogFilePath;

    static Logger()
    {
        LogFilePath = "log.txt";
        Console.WriteLine("Static constructor called.");
    }

    public Logger()
    {
        Console.WriteLine("Instance constructor called.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = new Logger();
        Logger logger2 = new Logger();
    }
}
```

- [ ] 3 láº§n
- [ ] 0 láº§n
- [x] 1 láº§n
- [ ] 2 láº§n

> Giáº£i thÃ­ch: Static constructor chá»‰ cháº¡y má»™t láº§n cho má»—i class trong má»™t AppDomain.

## CÃ¢u 10
Chá»§ Ä‘á»: Static vÃ  instance methods
TÃ¬m lá»—i sai trong Ä‘oáº¡n code sau?

```csharp
public class Converter
{
    public static double ToDouble(string value)
    {
        return double.Parse(value);
    }

    public string ToString(double value)
    {
        return value.ToString();
    }
}

class Program
{
    static void Main(string[] args)
    {
        Converter converter = new Conveter();
        double result = Converter.ToDouble("123.45");
        string strResult = converter.ToString(result);
        Console.WriteLine(strResult);
    }
}
```

- [x] KhÃ´ng cÃ³ lá»—i
- [ ] PhÆ°Æ¡ng thá»©c ToDouble khÃ´ng tráº£ vá» giÃ¡ trá»‹ Ä‘Ãºng
- [ ] KhÃ´ng thá»ƒ gá»i phÆ°Æ¡ng thá»©c ToDouble tá»« lá»›p Converter
- [ ] KhÃ´ng thá»ƒ gá»i phÆ°Æ¡ng thá»©c ToString tá»« Ä‘á»‘i tÆ°á»£ng converter

> Giáº£i thÃ­ch: MÃ¬nh giá»¯ nguyÃªn theo Ä‘Ã¡p Ã¡n hiá»ƒn thá»‹ trong PDF.

## CÃ¢u 11
Chá»§ Ä‘á»: Static field
Äoáº¡n code sau sáº½ in ra káº¿t quáº£ gÃ¬?

```csharp
public class Employee
{
    public static int EmployeeCount;
    public string Name;

    public Employee(string name)
    {
        Name = name;
        EmployeeCount++;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Employee emp1 = new Employee("Alice");
        Employee emp2 = new Employee("Bob");
        Console.WriteLine(Employee.EmployeeCount);
    }
}
```

- [ ] 1
- [ ] 0
- [x] 2
- [ ] 3

> Giáº£i thÃ­ch: Má»—i láº§n táº¡o `Employee`, biáº¿n static `EmployeeCount` tÄƒng lÃªn 1.

## CÃ¢u 12
Chá»§ Ä‘á»: Properties
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» viá»‡c sá»­ dá»¥ng properties Ä‘á»ƒ kiá»ƒm soÃ¡t truy cáº­p tá»›i cÃ¡c trÆ°á»ng trong class?

- [ ] Properties khÃ´ng thá»ƒ kiá»ƒm soÃ¡t truy cáº­p tá»›i báº¥t ká»³ trÆ°á»ng nÃ o.
- [ ] Properties khÃ´ng thá»ƒ kiá»ƒm soÃ¡t truy cáº­p tá»›i cÃ¡c trÆ°á»ng private.
- [x] Properties cÃ³ thá»ƒ kiá»ƒm soÃ¡t truy cáº­p tá»›i cÃ¡c trÆ°á»ng private.
- [ ] Properties chá»‰ cÃ³ thá»ƒ kiá»ƒm soÃ¡t truy cáº­p tá»›i cÃ¡c trÆ°á»ng public.

> Giáº£i thÃ­ch: Property thÆ°á»ng Ä‘Æ°á»£c dÃ¹ng Ä‘á»ƒ Ä‘Ã³ng gÃ³i vÃ  kiá»ƒm soÃ¡t field private.

## CÃ¢u 13
Chá»§ Ä‘á»: Static
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» cÃ¡c thÃ nh pháº§n static trong má»™t class?

- [ ] Má»—i object cá»§a class sáº½ cÃ³ má»™t báº£n sao riÃªng cá»§a cÃ¡c thÃ nh pháº§n static.
- [ ] CÃ¡c thÃ nh pháº§n static khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn trong class.
- [x] CÃ¡c thÃ nh pháº§n static Ä‘Æ°á»£c chia sáº» giá»¯a táº¥t cáº£ cÃ¡c object cá»§a class.
- [ ] CÃ¡c thÃ nh pháº§n static chá»‰ cÃ³ thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn ngoÃ i class.

> Giáº£i thÃ­ch: ThÃ nh pháº§n static thuá»™c vá» class vÃ  Ä‘Æ°á»£c dÃ¹ng chung.

## CÃ¢u 14
Chá»§ Ä‘á»: Properties
Chá»n phÃ¡t biá»ƒu Ä‘Ãºng?

- [ ] Properties tá»± Ä‘á»™ng sáº½ chá»‰ Ä‘Æ°á»£c phÃ©p Ä‘á»c giÃ¡ trá»‹
- [ ] Properties lÃ  phÆ°Æ¡ng thá»©c dÃ¹ng Ä‘á»ƒ truy cáº­p cÃ¡c thÃ nh pháº§n tÄ©nh.
- [x] Properties cÃ³ thá»ƒ gÃ¡n giÃ¡ trá»‹ cho biáº¿n private.
- [ ] Properties lÃ  field Ä‘Æ°á»£c khai bÃ¡o á»Ÿ pháº¡m vi truy cáº­p public

> Giáº£i thÃ­ch: Property cÃ³ thá»ƒ lÃ m lá»›p vá» Ä‘á»ƒ Ä‘á»c/ghi field private.

## CÃ¢u 15
Chá»§ Ä‘á»: Properties
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» viá»‡c sá»­ dá»¥ng properties vá»›i cÃ¡c tá»« khÃ³a truy cáº­p nhÆ° public, private, protected?

- [ ] Properties khÃ´ng thá»ƒ sá»­ dá»¥ng cÃ¡c tá»« khÃ³a truy cáº­p.
- [x] Properties cÃ³ thá»ƒ sá»­ dá»¥ng cÃ¡c tá»« khÃ³a truy cáº­p Ä‘á»ƒ kiá»ƒm soÃ¡t quyá»n truy cáº­p.
- [ ] Properties chá»‰ cÃ³ thá»ƒ sá»­ dá»¥ng tá»« khÃ³a private.
- [ ] Properties chá»‰ cÃ³ thá»ƒ sá»­ dá»¥ng tá»« khÃ³a public.

> Giáº£i thÃ­ch: Cáº£ property vÃ  accessor Ä‘á»u cÃ³ thá»ƒ dÃ¹ng access modifier phÃ¹ há»£p.

## CÃ¢u 16
Chá»§ Ä‘á»: Static field
Äiá»u gÃ¬ xáº£y ra náº¿u báº¡n khai bÃ¡o má»™t static field trong má»™t class vÃ  khÃ´ng khá»Ÿi táº¡o nÃ³?

- [ ] Static field sáº½ cÃ³ giÃ¡ trá»‹ máº·c Ä‘á»‹nh lÃ  null.
- [x] Static field sáº½ cÃ³ giÃ¡ trá»‹ máº·c Ä‘á»‹nh tÃ¹y thuá»™c vÃ o kiá»ƒu dá»¯ liá»‡u cá»§a nÃ³.
- [ ] Static field sáº½ cÃ³ giÃ¡ trá»‹ máº·c Ä‘á»‹nh lÃ  0.
- [ ] Static field sáº½ khÃ´ng cÃ³ giÃ¡ trá»‹ vÃ  sáº½ gÃ¢y ra lá»—i compile-time.

> Giáº£i thÃ­ch: Biáº¿n static nháº­n default value theo kiá»ƒu dá»¯ liá»‡u, giá»‘ng field thÆ°á»ng.

## CÃ¢u 17
Chá»§ Ä‘á»: Properties
Äiá»u nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng vá» viá»‡c sá»­ dá»¥ng properties Ä‘á»ƒ kiá»ƒm tra vÃ  xÃ¡c thá»±c giÃ¡ trá»‹ trÆ°á»›c khi gÃ¡n cho cÃ¡c trÆ°á»ng?

- [ ] Properties khÃ´ng thá»ƒ kiá»ƒm tra vÃ  xÃ¡c thá»±c giÃ¡ trá»‹.
- [ ] Properties chá»‰ cÃ³ thá»ƒ kiá»ƒm tra giÃ¡ trá»‹ trÆ°á»›c khi ghi.
- [ ] Properties chá»‰ cÃ³ thá»ƒ kiá»ƒm tra giÃ¡ trá»‹ trÆ°á»›c khi Ä‘á»c.
- [x] Properties cÃ³ thá»ƒ kiá»ƒm tra vÃ  xÃ¡c thá»±c giÃ¡ trá»‹ trÆ°á»›c khi gÃ¡n cho cÃ¡c trÆ°á»ng.

> Giáº£i thÃ­ch: Setter cÃ³ thá»ƒ chá»©a logic validation.

## CÃ¢u 18
Chá»§ Ä‘á»: Properties
Äiá»u gÃ¬ xáº£y ra náº¿u báº¡n khai bÃ¡o má»™t property vá»›i cáº£ phÆ°Æ¡ng thá»©c get vÃ  set nhÆ°ng khÃ´ng khai bÃ¡o báº¥t ká»³ logic nÃ o trong cÃ¡c phÆ°Æ¡ng thá»©c nÃ y?

- [ ] Property sáº½ chá»‰ cÃ³ thá»ƒ Ä‘á»c giÃ¡ trá»‹.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn ngoÃ i class.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘á»c hoáº·c ghi giÃ¡ trá»‹.
- [x] Property sáº½ cÃ³ thá»ƒ Ä‘á»c vÃ  ghi giÃ¡ trá»‹ mÃ  khÃ´ng cÃ³ báº¥t ká»³ kiá»ƒm tra nÃ o.

> Giáº£i thÃ­ch: Khi khÃ´ng cÃ³ logic bá»• sung, property hoáº¡t Ä‘á»™ng nhÆ° truy cáº­p Ä‘á»c/ghi thÃ´ng thÆ°á»ng.

## CÃ¢u 19
Chá»§ Ä‘á»: Static property
Lá»—i sai trong Ä‘oáº¡n code trÃªn sau gÃ¬?

```csharp
public class Configuration
{
    public static string AppName { get; set; }

    static Configuration()
    {
        AppName = "MyApp";
    }
}

class Program
{
    static void Main(string[] args)
    {
        Configuration config = new Configuration();
        Console.WriteLine(config.AppName);
    }
}
```

- [x] KhÃ´ng thá»ƒ truy cáº­p vÃ o thuá»™c tÃ­nh AppName tá»« Ä‘á»‘i tÆ°á»£ng config
- [ ] Static constructor khÃ´ng Ä‘Æ°á»£c gá»i Ä‘Ãºng
- [ ] GiÃ¡ trá»‹ cá»§a AppName khÃ´ng Ä‘Æ°á»£c gÃ¡n Ä‘Ãºng
- [ ] KhÃ´ng cÃ³ lá»—i

> Giáº£i thÃ­ch: Theo Ä‘Ã¡p Ã¡n trong PDF, lá»—i lÃ  truy cáº­p static property thÃ´ng qua object.

## CÃ¢u 20
Chá»§ Ä‘á»: Static vÃ  non-static
Äiá»u gÃ¬ xáº£y ra náº¿u cá»‘ gáº¯ng truy cáº­p má»™t trÆ°á»ng non-static tá»« má»™t phÆ°Æ¡ng thá»©c static?

- [ ] TrÆ°á»ng non-static khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p vÃ  sáº½ gÃ¢y ra lá»—i compile-time.
- [x] TrÆ°á»ng non-static sáº½ Ä‘Æ°á»£c truy cáº­p nhÆ°ng sáº½ gÃ¢y ra lá»—i runtime.
- [ ] TrÆ°á»ng non-static sáº½ Ä‘Æ°á»£c truy cáº­p thÃ nh cÃ´ng.
- [ ] TrÆ°á»ng non-static sáº½ Ä‘Æ°á»£c truy cáº­p nhÆ°ng giÃ¡ trá»‹ cá»§a nÃ³ sáº½ lÃ  null.

> Giáº£i thÃ­ch: MÃ¬nh giá»¯ Ä‘Ãºng Ä‘Ã¡p Ã¡n Ä‘Æ°á»£c Ä‘Ã¡nh dáº¥u trong PDF.

## CÃ¢u 21
Chá»§ Ä‘á»: Static methods
Cáº¥p Ä‘á»™ truy cáº­p phÆ°Æ¡ng thá»©c tÄ©nh lÃ ?

- [ ] Cáº£ lá»›p vÃ  Ä‘á»‘i tÆ°á»£ng
- [ ] Äá»‘i tÆ°á»£ng
- [x] Lá»›p
- [ ] KhÃ´ng thá»ƒ truy cáº­p phÆ°Æ¡ng thá»©c tÄ©nh á»Ÿ cáº¥p Ä‘á»™ lá»›p vÃ  cáº¥p Ä‘á»™ Ä‘á»‘i tÆ°á»£ng

> Giáº£i thÃ­ch: Theo Ä‘Ã¡p Ã¡n cá»§a Ä‘á», phÆ°Æ¡ng thá»©c tÄ©nh Ä‘Æ°á»£c truy cáº­p á»Ÿ cáº¥p lá»›p.

## CÃ¢u 22
Chá»§ Ä‘á»: Static constructor
Khi nÃ o má»™t static constructor Ä‘Æ°á»£c gá»i?

- [ ] Khi má»™t phÆ°Æ¡ng thá»©c non-static cá»§a class Ä‘Æ°á»£c gá»i.
- [ ] Khi má»™t phÆ°Æ¡ng thá»©c static cá»§a class Ä‘Æ°á»£c gá»i láº§n thá»© hai.
- [x] Khi má»™t thÃ nh pháº§n static cá»§a class Ä‘Æ°á»£c truy cáº­p láº§n Ä‘áº§u tiÃªn.
- [ ] Khi má»™t object cá»§a class Ä‘Æ°á»£c táº¡o.

> Giáº£i thÃ­ch: Static constructor cháº¡y trÆ°á»›c láº§n sá»­ dá»¥ng static member Ä‘áº§u tiÃªn.

## CÃ¢u 23
Chá»§ Ä‘á»: Static method
Äoáº¡n code trÃªn sáº½ in ra káº¿t quáº£ gÃ¬?

```csharp
public class Counter
{
    public static int Count;

    public static void Increment()
    {
        Count++;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Counter.Increment();
        Counter.Increment();
        Console.WriteLine(Counter.Count);
    }
}
```

- [ ] 1
- [ ] 0
- [ ] 3
- [x] 2

> Giáº£i thÃ­ch: `Increment()` Ä‘Æ°á»£c gá»i hai láº§n nÃªn `Count` báº±ng 2.

## CÃ¢u 24
Chá»§ Ä‘á»: Static method
Äiá»u gÃ¬ xáº£y ra khi khai bÃ¡o má»™t phÆ°Æ¡ng thá»©c static trong má»™t class?

- [ ] PhÆ°Æ¡ng thá»©c chá»‰ cÃ³ thá»ƒ truy cáº­p cÃ¡c thÃ nh pháº§n non-static trong class.
- [ ] PhÆ°Æ¡ng thá»©c cÃ³ thá»ƒ truy cáº­p táº¥t cáº£ cÃ¡c thÃ nh pháº§n trong class.
- [x] PhÆ°Æ¡ng thá»©c chá»‰ cÃ³ thá»ƒ truy cáº­p cÃ¡c thÃ nh pháº§n static khÃ¡c trong class.
- [ ] PhÆ°Æ¡ng thá»©c khÃ´ng thá»ƒ truy cáº­p báº¥t ká»³ thÃ nh pháº§n nÃ o trong class.

> Giáº£i thÃ­ch: Theo kiáº¿n thá»©c cÆ¡ báº£n, static method khÃ´ng truy cáº­p trá»±c tiáº¿p instance member náº¿u khÃ´ng cÃ³ object.

## CÃ¢u 25
Chá»§ Ä‘á»: Static method
Lá»—i sai trong Ä‘oáº¡n code sau lÃ  gÃ¬?

```csharp
public class Calculator
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Calculator calc = new Calculator();
        int result = calc.Add(5, 3);
        Console.WriteLine(result);
    }
}
```

- [ ] KhÃ´ng thá»ƒ gá»i phÆ°Æ¡ng thá»©c Add tá»« Main
- [ ] KhÃ´ng cÃ³ lá»—i
- [x] KhÃ´ng thá»ƒ táº¡o Ä‘á»‘i tÆ°á»£ng Calculator Ä‘á»ƒ gá»i phÆ°Æ¡ng thá»©c Add
- [ ] PhÆ°Æ¡ng thá»©c Add khÃ´ng tráº£ vá» giÃ¡ trá»‹ Ä‘Ãºng

> Giáº£i thÃ­ch: Theo Ä‘Ã¡p Ã¡n trong PDF, lá»—i Ä‘Æ°á»£c quy vá» viá»‡c táº¡o object Ä‘á»ƒ gá»i static method.

## CÃ¢u 26
Chá»§ Ä‘á»: Static constructor
Static constructor Ä‘Æ°á»£c gá»i khi nÃ o trong Ä‘oáº¡n code trÃªn?

```csharp
public class Database
{
    public static string ConnectionString;

    static Database()
    {
        ConnectionString = "Server=myServer;Database=myDB;";
    }

    public static void Connect()
    {
        Console.WriteLine("Connecting to " + ConnectionString);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Database.Connect();
    }
}
```

- [ ] Khi chÆ°Æ¡ng trÃ¬nh báº¯t Ä‘áº§u cháº¡y
- [ ] Khi thuá»™c tÃ­nh ConnectionString Ä‘Æ°á»£c truy cáº­p
- [x] Khi phÆ°Æ¡ng thá»©c Connect Ä‘Æ°á»£c gá»i
- [ ] Khi Ä‘á»‘i tÆ°á»£ng Database Ä‘Æ°á»£c táº¡o

> Giáº£i thÃ­ch: Theo Ä‘Ã¡p Ã¡n trong Ä‘á», láº§n truy cáº­p qua `Database.Connect()` lÃ m static constructor cháº¡y.

## CÃ¢u 27
Chá»§ Ä‘á»: Properties
Äiá»u gÃ¬ xáº£y ra náº¿u khÃ´ng khai bÃ¡o phÆ°Æ¡ng thá»©c set cho má»™t property?

- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘á»c giÃ¡ trá»‹.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘Æ°á»£c truy cáº­p tá»« bÃªn ngoÃ i class.
- [x] Property sáº½ khÃ´ng thá»ƒ ghi giÃ¡ trá»‹.
- [ ] Property sáº½ khÃ´ng thá»ƒ Ä‘Æ°á»£c khá»Ÿi táº¡o.

> Giáº£i thÃ­ch: KhÃ´ng cÃ³ setter thÃ¬ property khÃ´ng thá»ƒ gÃ¡n giÃ¡ trá»‹ theo cÃ¡ch thÃ´ng thÆ°á»ng.

## CÃ¢u 28
Chá»§ Ä‘á»: Properties
Lá»—i sai trong Ä‘oáº¡n code sau lÃ  gÃ¬?

```csharp
public class Person
{
    private string name;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}

class Program
{
    static void Main(string[] args)
    {
        Person person = new Person();
        person.Name = "John";
        Console.WriteLine(person.name);
    }
}
```

- [x] KhÃ´ng thá»ƒ truy cáº­p trá»±c tiáº¿p vÃ o trÆ°á»ng name tá»« Main
- [ ] PhÆ°Æ¡ng thá»©c get khÃ´ng tráº£ vá» giÃ¡ trá»‹ Ä‘Ãºng
- [ ] KhÃ´ng cÃ³ lá»—i
- [ ] GiÃ¡ trá»‹ cá»§a name khÃ´ng Ä‘Æ°á»£c gÃ¡n Ä‘Ãºng

> Giáº£i thÃ­ch: `name` lÃ  field private nÃªn khÃ´ng thá»ƒ truy cáº­p trá»±c tiáº¿p tá»« `Main`.

## CÃ¢u 29
Chá»§ Ä‘á»: Static property
Äoáº¡n code trÃªn sáº½ in ra káº¿t quáº£ gÃ¬?

```csharp
public class Settings
{
    public static string Theme { get; set; }

    public static void ApplyTheme()
    {
        Console.WriteLine("Applying theme: " + Theme);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Settings.Theme = "Dark";
        Settings.ApplyTheme();
    }
}
```

- [ ] Applying theme:
- [ ] KhÃ´ng cÃ³ káº¿t quáº£
- [x] Applying theme: Dark
- [ ] Applying theme: Light

> Giáº£i thÃ­ch: `Theme` Ä‘Æ°á»£c gÃ¡n lÃ  `"Dark"` trÆ°á»›c khi gá»i `ApplyTheme()`.

## CÃ¢u 30
Chá»§ Ä‘á»: Properties
Chá»n phÃ¡t biá»ƒu Ä‘Ãºng nháº¥t vá» properties.

- [ ] Properties lÃ  má»™t phÆ°Æ¡ng thá»©c Ä‘áº·c biá»‡t.
- [ ] Properties lÃ  má»™t biáº¿n Ä‘áº·c biá»‡t.
- [x] Properties Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a logic giá»‘ng phÆ°Æ¡ng thá»©c nhÆ°ng khi truy xuáº¥t vÃ  gÃ¡n giÃ¡ trá»‹ giá»‘ng field.
- [ ] ChÃºng ta cÃ³ thá»ƒ sá»­ dá»¥ng Properties thay cho phÆ°Æ¡ng thá»©c.

> Giáº£i thÃ­ch: Property cho cÃº phÃ¡p truy cáº­p giá»‘ng field nhÆ°ng cÃ³ thá»ƒ chá»©a logic nhÆ° method.
# CÃ¢u sai

- Thá»i gian cháº¥m: 19:50:28 30/4/2026
- File Ä‘á»: kiem-tra-tren-lop-1.md
- Äiá»ƒm: 16/20

## CÃ¢u sai 1
Chá»§ Ä‘á»: Cáº¥u trÃºc chÆ°Æ¡ng trÃ¬nh
Pháº§n nÃ o cá»§a chÆ°Æ¡ng trÃ¬nh C# chá»©a Ä‘iá»ƒm báº¯t Ä‘áº§u cá»§a chÆ°Æ¡ng trÃ¬nh?

- [ ] Namespace
- [ ] PhÆ°Æ¡ng thá»©c
- [ ] Class
- [x] HÃ m Main

- Báº¡n chá»n: A. Namespace
- ÄÃ¡p Ã¡n Ä‘Ãºng: D. HÃ m Main
> Giáº£i thÃ­ch: ChÆ°Æ¡ng trÃ¬nh C# console báº¯t Ä‘áº§u cháº¡y tá»« `Main`.

## CÃ¢u sai 2
Chá»§ Ä‘á»: Constructor
PhÆ°Æ¡ng thá»©c nÃ o trong C# Ä‘Æ°á»£c gá»i tá»± Ä‘á»™ng khi má»™t Ä‘á»‘i tÆ°á»£ng Ä‘Æ°á»£c táº¡o ra?

- [ ] Instance method
- [x] Constructor
- [ ] Destructor
- [ ] Static method

- Báº¡n chá»n: A. Instance method
- ÄÃ¡p Ã¡n Ä‘Ãºng: B. Constructor
> Giáº£i thÃ­ch: Constructor Ä‘Æ°á»£c gá»i khi táº¡o object báº±ng `new`.

## CÃ¢u sai 3
Chá»§ Ä‘á»: Reference type
Cho biáº¿t Ä‘oáº¡n chÆ°Æ¡ng trÃ¬nh sau in ra káº¿t quáº£ bao nhiÃªu?

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

- [ ] KhÃ´ng xÃ¡c Ä‘á»‹nh Ä‘Æ°á»£c
- [x] 100
- [ ] 0
- [ ] 50

- Báº¡n chá»n: D. 50
- ÄÃ¡p Ã¡n Ä‘Ãºng: B. 100
> Giáº£i thÃ­ch: `obj1` vÃ  `obj2` cÃ¹ng tham chiáº¿u Ä‘áº¿n má»™t object nÃªn thay Ä‘á»•i qua `obj2` cÅ©ng áº£nh hÆ°á»Ÿng `obj1`.

## CÃ¢u sai 4
Chá»§ Ä‘á»: Method overloading
Äoáº¡n mÃ£ sau cÃ³ há»£p lá»‡ khÃ´ng?

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

- [ ] KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `Display` pháº£i cÃ³ tá»« khÃ³a `static`
- [x] Há»£p lá»‡
- [ ] KhÃ´ng há»£p lá»‡, kiá»ƒu dá»¯ liá»‡u cá»§a tham sá»‘ pháº£i giá»‘ng nhau
- [ ] KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `Display` bá»‹ trÃ¹ng láº·p

- Báº¡n chá»n: D. KhÃ´ng há»£p lá»‡, phÆ°Æ¡ng thá»©c `Display` bá»‹ trÃ¹ng láº·p
- ÄÃ¡p Ã¡n Ä‘Ãºng: B. Há»£p lá»‡
> Giáº£i thÃ­ch: ÄÃ¢y lÃ  overload há»£p lá»‡ vÃ¬ hai phÆ°Æ¡ng thá»©c cÃ¹ng tÃªn nhÆ°ng khÃ¡c kiá»ƒu tham sá»‘.
