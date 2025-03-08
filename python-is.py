import sys
sys.setrecursionlimit(1000)
def python_is():
  print("Hi!")
  def nothing():
    print("I don't know.")
    def lol():
      print("help")
      def bruh():
        print("AHH")
      bruh()
    lol()
  nothing()
python_is()