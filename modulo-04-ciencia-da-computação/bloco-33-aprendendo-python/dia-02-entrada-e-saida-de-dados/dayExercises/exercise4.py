import json


with open("books.json") as books_file:
    content = books_file.read()
    books = json.loads(content)
    total_books = len(books)
    # print(books)


categories = {}
for book in books:
    for category in book['categories']:
        if category != "" and category not in categories:
            categories[category] = 1
        elif category != "":
            categories[category] += 1

count = 0
for value in categories.values():
    count += value

print(count)
# dictCategories = {category: 0 for category in categories}
# # for category in categories:
#     # count_category = 0
# for book in books:
#     for category in book['categories']:
#         if category != "":
#             # print(dictCategories[category])
#             dictCategories[category] += 1
print(categories)
