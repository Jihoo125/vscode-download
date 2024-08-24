import calendar
a = input("년도를 입력하세요. 입력한 후, 잠시 후 달력이 나옵니다(형식: yyyy)")

cal = calendar.calendar(
    theyear=int(a), 
    w=2,   
    l=1,   
    c=6,   
    m=3
)

print(cal)  
