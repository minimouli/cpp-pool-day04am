/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GCC, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 5', () => {

    suite('Display', () => {

        suite('Display int', () => {

            let gcc: GCC

            beforeAll(() => {
                gcc = new GCC([
                    Path.fromProject('./ex05/disp.c'),
                    Path.fromMoulinette('./res/ex05/disp_int_array_main.c')
                ])
            })

            test('Simple', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '5',
                    '5', '3', '2', '4', '1'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '5', '3', '2', '4', '1',
                    ''
                ])
            })

            test('With duplicates', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '8',
                    '5', '3', '1', '2', '4', '5', '1', '3'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '5', '3', '1', '2', '4', '5', '1', '3',
                    ''
                ])
            })

            test('Empty', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '0'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([''])
            })

        })

        suite('Display pointers', () => {

            let gcc: GCC

            beforeAll(() => {
                gcc = new GCC([
                    Path.fromProject('./ex05/disp.c'),
                    Path.fromMoulinette('./res/ex05/disp_array_main.c')
                ])
            })

            test('Simple', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    'hello', 'bonjour', 'hola'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '[hello]', '[bonjour]', '[hola]',
                    ''
                ])
            })

            test('With duplicates', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    'hello', 'hola', 'bonjour', 'hola', 'bonjour'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '[hello]', '[hola]', '[bonjour]', '[hola]', '[bonjour]',
                    ''
                ])
            })

            test('Empty', async () => {

                const executable = await gcc.execute()

                executable.setArguments([])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([''])
            })

        })

    })

    suite('Sort', () => {

        suite('Sort int', () => {

            let gcc: GCC

            beforeAll(() => {
                gcc = new GCC([
                    Path.fromProject('./ex05/sort.c'),
                    Path.fromMoulinette('./res/ex05/sort_int_array_main.c')
                ])
            })

            test('Simple', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '5',
                    '5', '3', '2', '4', '1'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '1', '2', '3', '4', '5',
                    ''
                ])
            })

            test('With duplicates', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '8',
                    '5', '3', '1', '2', '4', '5', '1', '3'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '1', '1', '2', '3', '3', '4', '5', '5',
                    ''
                ])
            })

            test('Empty', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '0'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([''])
            })

        })

        suite('Sort pointers', () => {

            let gcc: GCC

            beforeAll(() => {
                gcc = new GCC([
                    Path.fromProject('./ex05/sort.c'),
                    Path.fromMoulinette('./res/ex05/sort_array_main.c')
                ])
            })

            test('Simple', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    'hello', 'bonjour', 'hola'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    'bonjour', 'hello', 'hola',
                    ''
                ])
            })

            test('With duplicates', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    'hello', 'hola', 'bonjour', 'hola', 'bonjour'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    'bonjour', 'bonjour', 'hello', 'hola', 'hola',
                    ''
                ])
            })

            test('Empty', async () => {

                const executable = await gcc.execute()

                executable.setArguments([])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([''])
            })

        })

    })

    suite('Unique', () => {

        suite('Unique int', () => {

            let gcc: GCC

            beforeAll(() => {
                gcc = new GCC([
                    Path.fromProject('./ex05/uniq.c'),
                    Path.fromMoulinette('./res/ex05/uniq_int_array_main.c')
                ])
            })

            test('Simple', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '5',
                    '5', '3', '2', '4', '1'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '5',
                    '5', '3', '2', '4', '1',
                    ''
                ])
            })

            test('With duplicates', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '8',
                    '5', '3', '1', '2', '4', '5', '1', '3'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '5',
                    '5', '3', '1', '2', '4',
                    ''
                ])
            })

            test('Empty', async () => {

                const executable = await gcc.execute()

                executable.setArguments([
                    '0'
                ])
                await executable.execute()

                expect(executable).toExitWith(0)
                await expect(executable).toOutput([
                    '0', ''
                ])
            })

        })

    })

    suite('Unique pointers', () => {

        let gcc: GCC

        beforeAll(() => {
            gcc = new GCC([
                Path.fromProject('./ex05/uniq.c'),
                Path.fromMoulinette('./res/ex05/uniq_array_main.c')
            ])
        })

        test('Simple', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', 'bonjour', 'hola'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '3',
                'hello', 'bonjour', 'hola',
                ''
            ])
        })

        test('With duplicates', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', 'hola', 'hello', 'bonjour', 'hola', 'bonjour'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '3',
                'hello', 'hola', 'bonjour',
                ''
            ])
        })

        test('Empty', async () => {

            const executable = await gcc.execute()

            executable.setArguments([])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '0', ''
            ])
        })

    })

})
