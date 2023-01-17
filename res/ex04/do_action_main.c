/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

void do_action(int action, const char *str);

int string_to_int(char *string) {
    int result = 0;

    for (int i = 0; string[i] != '\0'; i++)
        result = (result * 10) + string[i] - '0';

    return result;
}

int main(int argc, char **argv) {

    if (argc < 3)
        return 1;

    int action = string_to_int(argv[1]);
    char *message = argv[2];

    do_action(action, message);

    return 0;
}
