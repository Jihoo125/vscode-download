import sys
sys.setrecursionlimit(50)
def python_is():
  print("Hi!")
  def nothing():
    print("I don't know.")
    def lol():
      print("help")
      def bruh():
        python_is()
        nothing()
        lol()
bruh()