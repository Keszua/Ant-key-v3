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
#     }
# }

mrowka = {
    'cialo': {
        'g1': {'x': 0,  'y': 0},
        'n1': {'x': 0,  'y': 0},
        'n2': {'x': 0,  'y': 0},
        'n3': {'x': 0,  'y': 0},
        'st': {'x': 0,  'y': 0},
        'd': [ 
            "M 277.3,115.4 C 261.1,114.4 248.4,117.2 241.7,126.3 242.6,141.9 257.6,144.3 267.7,151.3 277.3,151.4 292.5,158.7 288.4,141.4 283.4,134.6 279.6,126.2 277.3,115.4 Z",
            "M 241.9,127 236.1,127.3 C 231.8,129.1 231.7,134.9 236.6,137.1 L 241.4,136.9 C 249.4,143.6 251.5,147.3 252.8,150.7 266,166.5 268.2,156 268.8,151.6 256.4,145.4 241.5,139 241.9,127 Z",
        ],

    }, 
    5: "e",
    'noga1': {
        'odn1': {
            'c1': {'x': 0, 'y': 0 },
            'c2': {'x': 0, 'y': 0 },
            'path': [
                # {   'style': {  'zIndex': 6, 'visibility': "visible" , 'stroke': '#592e00', 'strokeWidth': 1,  'strokeOpacity': 1, 'strokeMiterlimit':4, 'fill': '#834e40', 'fillOpacity': 1 },
                #     'd': '', },
                # {   'style': {  'zIndex': 6, 'visibility': "visible" , 'stroke': '#592e00', 'strokeWidth': 1,  'strokeOpacity': 1, 'strokeMiterlimit':4, 'fill': '#834e40', 'fillOpacity': 1 },
                #     'd': '', },
            ],
        },
        'odn2': {
            'c1': {'x': 0, 'y': 0 },
            'c2': {'x': 0, 'y': 0 },
            'path': [],
        },
        'odn3': {
            'c1': {'x': 0, 'y': 0 },
            'c2': {'x': 0, 'y': 0 },
            'path': [],
        },
    }
}




def konwertuj_obiekt( obj, tab ):

    for key, val in obj.items():
        if type(val) is dict:
            fileW.write( tab*'\t' + f'{key}: {{\n')
            tab += 1
            konwertuj_obiekt( val, tab )
            tab -= 1
            fileW.write(tab*'\t' +  f'}},\n')
        else:
            if type(val) is list:
                fileW.write(tab*'\t' + f'{key}: [\n')
                tab += 1
                
                for el in val:
                    if type(el) is str:
                        fileW.write(tab*'\t' + f"'{el}' ,\n")    
                    else:
                        if type(el) is dict:
                            fileW.write(tab*'\t' + '{\n' ) 
                            tab += 1   
                            konwertuj_obiekt( el, tab )
                            tab -= 1
                            fileW.write(tab*'\t' + '},\n' )    
                        else: 
                            konwertuj_obiekt( el, tab )
                
                tab -= 1
                fileW.write(tab*'\t' + '],\n')

            else: 
                if type(val) is int:
                    fileW.write(tab*'\t' + f'{key}: {val},\n')
                else:
                    fileW.write(tab*'\t' + f"{key}: '{val}',\n")


fileW = open(file_path(fileName), mode="w") # w : po otwarciu, kasowana jest zawartość
fileW.write("export const mrowka = {\n")

# fileW.write("    cialo: {\n\n")
# fileW.write("    },\n\n")

tabulator = 1
konwertuj_obiekt(mrowka, tabulator)
fileW.write("\n}\n")
fileW.close()





time_stop = time.time()
print("operacja trwała: ", time_stop - time_start)


