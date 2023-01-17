/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <stdio.h>

void mul_div_long(int first, int second, int *mul, int *div);

int string_to_int(char *string) {

    int sign = 1;
    int result = 0;

    for (int i = 0; string[i] != '\0'; i++) {

        if (string[i] == '-')
            sign *= -1;

        if ('0' <= string[i] && string[i] <= '9')
            result = (result * 10) + string[i] - '0';
    }

    return result * sign;
}

int main(int argc, char **argv) {

    if (argc < 3)
        return 1;

    int first = string_to_int(argv[1]);
    int second = string_to_int(argv[2]);

    int mul;
    int div;

    mul_div_long(first, second, &mul, &div);

    printf("mul: %i\n", mul);
    printf("div: %i\n", div);

    return 0;
}
