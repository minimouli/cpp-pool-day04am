/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>

void disp_array(const void *array, size_t nmemb, size_t size, void (*print) (const void *));

static void display(const void *str) {
    printf("[%s]\n", *(char **)str);
}

int main(int argc, char **argv) {
    disp_array(argv + 1, argc - 1, sizeof(*argv), &display);
    return 0;
}
