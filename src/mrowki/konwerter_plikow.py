# Skrypt, który otwiera i przeszukuje plik .svg 
# Plik svg musi zawieerać odpowiednie nazwy warts i podwarst
# Szukane wartsy:
# Należy przygotować plik np: "7R00_Camponotus.svn"
# Dodać go do tablicy nazw plików
# Wyniki zapsuje do "7R00_Camponotus.js"


import time
import os

time_start = time.time()


listaPlikow = ['7R00_Camponotus' ]

fileName=(f"{listaPlikow[0]}.js")

def file_path(relative_path):
    dir = os.path.dirname(os.path.abspath(__file__))
    split_path = relative_path.split("/")
    new_path = os.path.join(dir, *split_path)
    return new_path

# with open(file_path(fileName), "w") as f:
#     f.write("Powerful you have become.")

# mrowka = {
    
#     cialo: {
#         gl: {x: 0,  y: 0},
#         n1: {x: 0,  y: 0},
#         n2: {x: 0,  y: 0},
#         n3: {x: 0,  y: 0},
#         st: {x: 0,  y: 0},
#         d: [ ],
#     },

#     noga1: {
#         odn1: {
#             c1: {x: 0, y: 0 },
#             c2: {x: 0, y: 0 },
#             path: [
#                 {   style: {  zIndex: 6, visibility: "visible" , stroke: '#592e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
#                     d: '', },
#             ],
#         },
#         odn2: {
#             c1: {x: 0, y: 0 },
#             c2: {x: 0, y: 0 },
#             path: [
#                 {   style: {  zIndex: 6, visibility: "visible" , stroke: '#592e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
#                     d: '', },
#             ],
#         },
#         odn3: {
#             c1: {x: 0, y: 0 },
#             c2: {x: 0, y: 0 },
#             path: [
#                 {   style: {  zIndex: 6, visibility: "visible" , stroke: '#592e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
#                     d: '', },
#             ],
#         },
#         odn4: {
#             c1: {x: 0, y: 0 },
#             c2: {x: 0, y: 0 },
#             path: [
#                 {   style: {  zIndex: 6, visibility: "visible" , stroke: '#592e00', strokeWidth: 1,  strokeOpacity: 1, strokeMiterlimit:4, fill: '#834e40', fillOpacity: 1 },
#                     d: '', },
#             ],
#         },

#     }
# }

mrowka = {
    'cialo': {
        "g1": {'x': 0,  'y': 0},
        }, 
    5: "e",
}

fileW = open(file_path(fileName), mode="w") # w : po otwarciu, kasowana jest zawartość
fileW.write("export const mrowka = \n")

# fileW.write("    cialo: {\n\n")
# fileW.write("    },\n\n")

for key in mrowka.keys():
    print(key)

    fileW.write(f'    {key}:')


# fileW.write("\n}\n")
fileW.close()




time_stop = time.time()
print("operacja trwała: ", time_stop - time_start)


