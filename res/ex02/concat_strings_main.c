/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>

void concat_strings(const char *str1, const char *str2, char **result);

int main(int argc, char **argv) {

    if (argc < 3)
        return 1;

    char *first = argv[1];
    char *second = argv[2];
    char *result;

    concat_strings(first, second, &result);
    printf("%s\n", result);

    return 0;
}
