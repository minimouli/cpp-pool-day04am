/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>
#include <stdlib.h>

void array_1d_to_2d(const int *array, size_t height, size_t width, int ***result);
void array_2d_free(int **array, size_t height, size_t width);

int string_to_int(char *string) {
    int result = 0;

    for (int i = 0; string[i] != '\0'; i++)
        result = (result * 10) + string[i] - '0';

    return result;
}

int main(int argc, char **argv) {

    if (argc < 4)
        return 1;

    int size = string_to_int(argv[1]);
    int *array = malloc(sizeof(*array) * size);

    if (argc < size + 4)
        return 1;

    for (int i = 0; i < size; i++)
        array[i] = string_to_int(argv[i + 2]);

    int width = string_to_int(argv[size + 2]);
    int height = string_to_int(argv[size + 3]);

    int **result;

    array_1d_to_2d(array, height, width, &result);

    for (int i = 0; i < height; i++)
        for (int j = 0; j < width; j++)
            printf("%i%s", result[i][j], j < width - 1 ? ", " : "\n");

    free(array);
    array_2d_free(result, height, width);

    return 0;
}
