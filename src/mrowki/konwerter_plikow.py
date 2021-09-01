# Skrypt, który otwiera i przeszukuje plik .svg 
# Plik svg musi zawierać odpowiednie nazwy warts i podwarst
# Szukane warstwy jak w strukturze. 
# Należy przygotować plik np: "7R00_Camponotus.svn"
# Dodać go do tablicy nazw plików
# Wyniki zapsuje do "7R00_Camponotus.js"


import time
import os

time_start = time.time()

listaPlikow = ['6Q00_Formica_sanguinea', '7R00_Camponotus']

listaNogi = ({'noga1': ['odn1_1', 'odn1_2', 'odn1_3']},
            {'noga2': ['odn2_1', 'odn2_2', 'odn2_3']},  
            {'noga3': ['odn3_1', 'odn3_2', 'odn3_3']},  )
# listaOdn = ['odn1_1', 'odn1_2', 'odn1_3']

#--------------------------------------------------------------------------------------------------
def file_path(relative_path):
    dir = os.path.dirname(os.path.abspath(__file__))
    split_path = relative_path.split("/")
    new_path = os.path.join(dir, *split_path)
    return new_path


mrowka = {
    # 'cialo': {
    #     'gl': {'x': 0,  'y': 0},
    #     'n1': {'x': 0,  'y': 0},
    #     'n2': {'x': 0,  'y': 0},
    #     'n3': {'x': 0,  'y': 0},
    #     'st': {'x': 0,  'y': 0},
    #     'd': [ ],
    # }, 
    # 'noga1': {
    #     'odn1_1': {
    #         'c1': {'x': 0, 'y': 0 },
    #         'c2': {'x': 0, 'y': 0 },
    #         'path': [],
    #     },
    #     'odn1_2': {
    #         'c1': {'x': 0, 'y': 0 },
    #         'c2': {'x': 0, 'y': 0 },
    #         'path': [],
    #     },
    #     'odn1_3': {
    #         'c1': {'x': 0, 'y': 0 },
    #         'c2': {'x': 0, 'y': 0 },
    #         'path': [],
    #     },
    # },

}

# funkcja do przerobienia słownika na jsona i zapisuje do pliku
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


# wyszukuje tylko potrzebne style i zamienia ich nazwy
def selektorStylow(tablica):
    if tablica[0] == 'visibility':
        return tablica
    elif tablica[0] == 'opacity':
        return tablica
    elif tablica[0] == 'stroke':
        return tablica
    elif tablica[0] == 'stroke-width':
        tablica[0] = 'strokeWidth'
        return tablica
    elif tablica[0] == 'stroke-opacity':
        tablica[0] = 'strokeOpacity'
        return tablica
    elif tablica[0] == 'fill': 
        return tablica
    elif tablica[0] == 'fill-opacity':
        tablica[0] = 'fillOpacity'
        return tablica
    else:
        return None


#--------------------------------------------------------------------------------------------------
                    #        
  ### ##    ####        #### 
  #  #  #       #  ##   #   #
  #  #  #   #####   #   #   #
  #  #  #  #    #   #   #   #
  #  #  #   ### #  ###  #   #
#--------------------------------------------------------------------------------------------------


for plik in listaPlikow:
    print('plik', plik)
    mrowka.clear()
    print('mrowka_1', mrowka )

    # fileNameSVG=(f"./../../Robocze/mrowki/{listaPlikow[0]}.svg")
    # fileNameJS=(f"{listaPlikow[0]}.js")
    fileNameSVG=(f"./../../Robocze/mrowki/{plik}.svg")
    fileNameJS=(f"{plik}.js")

    # Otwiera plik
    fileR = open(file_path(fileNameSVG), mode="r")   # r tylko do odczytu
    print('fileR', fileR)

    # Przeszukanie pliku .svg
    licznik = 0
    licznikPath = 0
    znalezionyLabel = False
    znalezionyPath = False
    znalezionyEllipse = False
    znalezionyJoint = ''


    for obNoga in listaNogi:
        # print('obNoga', obNoga)

        kluczArr = list(obNoga.keys())
        keyNoga = kluczArr[0]
        # print('    klucz', keyNoga)
        mrowka[keyNoga] = {}

        obNogaArr = obNoga[keyNoga]
        for odn in obNogaArr:
            objPath =  { 'style': {}, 'd': '' }
            objJoint = {'x': 0, 'y': 0 }
            # mrowka[keyNoga][odn] = {'c1': {'x': 0, 'y': 0 }, 'c2': {'x': 0, 'y': 0 }, 'path': []}
            mrowka[keyNoga][odn] = {'path': []}


            for line in fileR:
                if keyNoga in line:
                    znalezionyLabel = True
                    
                if znalezionyLabel and '</g>' in line:
                    break

                if znalezionyLabel and '<path' in line:
                    znalezionyPath = True

                if znalezionyLabel and znalezionyPath and '/>' in line:
                    znalezionyPath = False
                    # mrowka['noga1']['odn1_1']['path'].append(objPath)
                    # mrowka[keyNoga][odn]['path'].append(objPath)
                    mrowka[keyNoga][odn]['path'].append({})
                    le = len(mrowka[keyNoga][odn]['path'])
                    mrowka[keyNoga][odn]['path'][le-1].update(objPath)
                    objPath.clear()
                    
                if znalezionyLabel and znalezionyPath and 'style=' in line:
                    lista = line.replace('style=', '').strip().strip('"').split(';')

                    newList = []
                    for el in lista:
                        newList.append(el.split(':'))

                    wyselekcjonowaneStyle = []
                    for el in newList:
                        wynik = selektorStylow(el)
                        if wynik:
                            wyselekcjonowaneStyle.append(wynik)

                    objStyle = dict(wyselekcjonowaneStyle)
                    objPath['style'] = objStyle
                    
                if znalezionyLabel and znalezionyPath and ' d=' in line:
                    # punkty = line.replace('d=', '').strip()
                    # objPath['d'] = punkty
                    objPath['d'] = line.replace('d=', '').strip().strip('"')


                if znalezionyLabel and '<ellipse' in line:
                    znalezionyEllipse = True

                if znalezionyLabel and znalezionyEllipse and '/>' in line:
                    znalezionyEllipse = False

                if znalezionyLabel and znalezionyJoint and '/>' in line:
                    znalezionyEllipse = False
                    # mrowka[keyNoga][odn][znalezionyJoint] = objJoint
                    mrowka[keyNoga][odn][znalezionyJoint] = {}
                    mrowka[keyNoga][odn][znalezionyJoint].update(objJoint)
                    znalezionyJoint = ''

                if znalezionyLabel and znalezionyEllipse and 'id=' in line:
                    odczytaneId = line.replace('id=', '').strip().strip('"')[-2:]

                    tupleSzukanychStawow = ('c1', 'c2', 'gl', 'n1', 'n2', 'n3', 'st')
                    if odczytaneId in tupleSzukanychStawow:
                        print('zawiera', odczytaneId)
                        znalezionyJoint = odczytaneId

                if znalezionyLabel and znalezionyJoint and 'cx=' in line:
                    objJoint['x'] = line.replace('cx=', '').strip().strip('"')

                if znalezionyLabel and znalezionyJoint and 'cy=' in line:
                    objJoint['y'] = line.replace('cy=', '').strip().strip('"')



    fileR.close()

    # Konwersja i zapisanie obiektu do pliku .js
    with open(file_path(fileNameJS), mode="w") as fileW: # w : po otwarciu, kasowana jest zawartość
        fileW.write("export const mrowka = {\n")
        tabulator = 1
        konwertuj_obiekt(mrowka, tabulator)
        fileW.write("\n}\n")






time_stop = time.time()
print("operacja trwała: ", time_stop - time_start)


