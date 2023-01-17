/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GCC, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 2', () => {

    suite('Concat strings', () => {

        let gcc: GCC

        beforeAll(() => {
            gcc = new GCC([
                Path.fromProject('./ex02/concat.c'),
                Path.fromMoulinette('./res/ex02/concat_strings_main.c')
            ])
        })

        test('"hello" and "world"', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', 'world'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'helloworld',
                ''
            ])
        })

        test('"" and "world"', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '', 'world'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'world',
                ''
            ])
        })

        test('"hello" and ""', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'hello',
                ''
            ])
        })

    })

    suite('Concat struct', () => {

        let gcc: GCC

        beforeAll(() => {
            gcc = new GCC([
                Path.fromProject('./ex02/concat.c'),
                Path.fromMoulinette('./res/ex02/concat_struct_main.c')
            ])
        })

        test('"hello" and "world"', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', 'world'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'helloworld',
                ''
            ])
        })

        test('"" and "world"', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '', 'world'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'world',
                ''
            ])
        })

        test('"hello" and ""', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                'hello', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'hello',
                ''
            ])
        })

    })

})
