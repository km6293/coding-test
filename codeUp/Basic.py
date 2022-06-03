# 6044 합, 차, 곱, 몫, 나머지, format
# a,b = input().split()
# print(int(a)+int(b))
# print(int(a)-int(b))
# print(int(a)*int(b))
# print(int(a)//int(b))
# print(int(a)%int(b))
# print(format(int(a)/int(b), ".2f"))


#6045 세 정수
# a,b,c = input().split()
# print(int(a)+int(b)+int(c) , format((int(a)+int(b)+int(c))/3, ".2f"))


#6046 비트연산자 
# a = int(input())
# print(a << 1)

#6047 비트연산자 2의 n승..
# a,b = input().split()
# print(int(a) << int(b))

#6048 삼항연산자
# a, b = input().split()
# print('True') if int(a) < int(b) else print('False')

#6049 
# a, b = input().split()
# print('True') if int(a) == int(b) else print('False')

#6050
# a, b = input().split()
# print('True') if int(a) <= int(b) else print('False')

#6051
# a, b = input().split()
# print(a != b)

#6052
# print(bool(int(input())))

#6053
# print(not bool(int(input())))

#6054
# a, b = input().split()
# print(bool(int(a)) and bool(int(b)))

#6055
# a, b = input().split()
# print(bool(int(a)) or bool(int(b)))

#6056
# a, b = input().split()
# print(not a == b)

#6057
# a, b = input().split()
# print(a == b)

#6058
# a, b = input().split()
# print(bool(int(a)) == False and bool(int(b)) == False)

#6059
# print(~int(input()))

#6060
# a, b = input().split()
# print(int(a) & int(b))

#6061
# a, b = input().split()
# print(int(a) | int(b))

#6062
# a, b = input().split()
# print(int(a) ^ int(b))

#6063
# a, b = input().split()
# print(int(a) if int(a) > int(b) else int(b))

#6064
# a, b, c = input().split()
# print( int(a) if int(a) < int(b) and int(a) < int(c) else int(b) if int(b) < int(c) else int(c) )

#6065
# a, b, c = input().split()
# if int(a) % 2 == 0 : print(a)
# if int(b) % 2 == 0 : print(b)
# if int(c) % 2 == 0 : print(c)

# 또 다른 풀이
# s = map(int, input().split())
# for i in s:
#   if i % 2 == 0:
#     print(i)

#6066
# s = map(int, input().split())
# for i in s:
#   if(i % 2) == 0:
#     print('even')
#   else:
#     print('odd')

#6067
# s = map(int, input().split())
# for i in s:
#   if i < 0:
#     if(i % 2) == 0:
#       print('A')
#     else:
#       print('B')
#   else :
#     if(i % 2) == 0:
#       print('C')
#     else:
#       print('D')

#6068
# a = int(input())
# if a >= 90:
#   print("A")
# else :
#   if a >= 70:
#     print("B")
#   else :
#     if a >= 40:
#       print("C")
#     else :
#       print("D")
    
#6069
# a = input()
# if a == 'A':
#   print('best!!!')
# else :
#   if a == 'B':
#     print('good!!')
#   else:
#     if a == 'C':
#       print('run!')
#     else:
#       if a == 'D':
#         print('slowly~')
#       else:
#         print('what?')

#6070
# a = int(input())
# if a // 3 == 1:
#   print('spring')
# elif a // 3 == 2:
#   print('summer')
# elif a // 3 == 3:
#   print('fall')
# else:
#   print('winter')

#6071
# num = int(input())
# while num != 0:
#   print(num)
#   num = int(input())

#6072
# n = int(input())
# while n != 0:
#   print(n)
#   n -= 1

#6073
# n = int(input())
# while n != 0:
#   n -= 1
#   print(n)

#6074 end 이해하기.
# s = ord('a')
# a = ord(input())
# while s <= a:
#   print(chr(s) , end=' ')
#   s += 1

#6075
# n = int(input())
# s = 0
# while s <= n:
#   print(s)
#   s += 1

#6076
# for i in range(int(input())+1):
#   print(i)

#6077
# n = 0
# for i in range(int(input())+1):
#   if(i%2==0):
#     n+=i
# print(n)

#6078
# n = ''
# while n != 'q':
#   n = input()
#   print(n)

#6079
# s = int(input())
# n = 1
# r = 1
# while n < s:
#   r += 1
#   n += r
# print(r)

#6080
# a, b = input().split()
# for i in range(int(a)):
#   for r in range(int(b)):
#     print(i+1,r+1)

#다른 풀이 map 을 씀으로써 1개를 덜 쓰게 되었다.
# a, b = map(int, input().split())
# for i in range(a):
#   for r in range(b):
#     print(i+1,r+1)

#6081
# 참고 
# print('%X'%n) n에 저장되어있는 값을 16진수(hexadecimal) 형태로 출력
# 작은 따옴표 2개를 사용해서 print(..., sep='') 으로 출력하면, 공백없이 모두 붙여 출력된다. 
# 작은 따옴표 2개 '' 또는 큰 따옴표 2개 "" 는 아무 문자도 없는 빈문자열(empty string)을 의미한다. 

# n = input()
# if n 
# for i in range(16):
#   # print('%X'%n, '*%X'%i, '=%X'%(n*i), sep='') 
#   print('%X'%int(n))
#   # print('%X'%i)
