import re

#declare function to use as a key for the sort method
def desc(e):
  return e[1]


def char_count(your_string):
  #initialize your variables
  my_string = list(re.sub("\W", '', your_string))
  my_dict = {}
  my_arr = []
  #find the count of each unique letter in the string
  for item in my_string:
    my_dict.update({item : my_dict[item] + 1}) if my_dict.get(item) else my_dict.update({item : 1})
  #add each unique letter and it's count as an array to my_arr
  for dict_key in my_dict:
    my_arr.append([dict_key, my_dict[dict_key]])
  #sort myArr alphabetically
  my_arr.sort()
  #return myArr sorted by the number of occurances (descending)
  my_arr.sort(reverse=True, key=desc)
  return my_arr