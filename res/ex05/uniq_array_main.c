/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>
#include <string.h>

size_t uniq_array(void *array, size_t nmemb, size_t size, int (*cmp) (const void*, const void*));

static int cmp(const void *a, const void *b) {
    return strcmp(*(char **) a, *(char **) b);
}

int main(int argc, char **argv) {

    int size = argc - 1;
    int new_size = uniq_array(argv + 1, size, sizeof(*argv), &cmp);

    printf("%i\n", new_size);

    for (int i = 0; i < new_size; i++)
        printf("%s\n", argv[i + 1]);

    return 0;
}
