function bubbleSort(array) {
    let iteracoes = 0
    let comparacoes = 0
    let result = []
    let swapped = false
    do {
        comparacoes++
        swapped = false
        array.forEach((current, i) => {
            if (current > array[i + 1]) {
                comparacoes++
                const temp = current

                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }

        })
        iteracoes++
    } while (swapped)

    result.push(iteracoes, comparacoes, array)
    
    return result
}
