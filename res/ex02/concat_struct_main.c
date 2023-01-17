/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>
#include "concat.h"

void concat_struct(concat_t *str);

int main(int argc, char **argv) {

    if (argc < 3)
        return 1;

    char *first = argv[1];
    char *second = argv[2];

    concat_t str = {
        .str1 = first,
        .str2 = second,
        .res = NULL
    };

    concat_struct(&str);
    printf("%s\n", str.res);

    return 0;
}
