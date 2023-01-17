/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>
#include <stdlib.h>

size_t uniq_int_array(int *array, size_t size);

int string_to_int(char *string) {
    int result = 0;

    for (int i = 0; string[i] != '\0'; i++)
        result = (result * 10) + string[i] - '0';

    return result;
}

int main(int argc, char **argv) {

    if (argc < 2)
        return 1;

    int size = string_to_int(argv[1]);
    int *array = malloc(sizeof(*array) * size);

    if (argc < size + 2)
        return 1;

    for (int i = 0; i < size; i++)
        array[i] = string_to_int(argv[i + 2]);

    int new_size = uniq_int_array(array, size);

    printf("%i\n", new_size);

    for (int i = 0; i < new_size; i++)
        printf("%i\n", array[i]);

    free(array);
    return 0;
}
