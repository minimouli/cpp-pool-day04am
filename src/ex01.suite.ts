/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GCC, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 1', () => {

    suite('Long', () => {

        let gcc: GCC

        beforeAll(() => {
            gcc = new GCC([
                Path.fromProject('./ex01/mul_div.c'),
                Path.fromMoulinette('./res/ex01/mul_div_long_main.c')
            ])
        })

        test('1 and 1', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', '1'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 1',
                'div: 1',
                ''
            ])
        })

        test('0 and 0', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', '0'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 42',
                ''
            ])
        })

        test('78 and 6', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '78', '6'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 468',
                'div: 13',
                ''
            ])
        })

        test('2468 and 1234', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2468', '1234'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 3045512',
                'div: 2',
                ''
            ])
        })

        test('-6 and 5', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '-6', '5'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: -30',
                'div: -1',
                ''
            ])
        })

        test('0 and 10', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', '10'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 0',
                ''
            ])
        })

        test('10 and 0', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '10', '0'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 42',
                ''
            ])
        })

    })

    suite('Short', () => {

        let gcc: GCC

        beforeAll(() => {
            gcc = new GCC([
                Path.fromProject('./ex01/mul_div.c'),
                Path.fromMoulinette('./res/ex01/mul_div_short_main.c')
            ])
        })

        test('1 and 1', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', '1'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 1',
                'div: 1',
                ''
            ])
        })

        test('0 and 0', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', '0'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 42',
                ''
            ])
        })

        test('78 and 6', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '78', '6'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 468',
                'div: 13',
                ''
            ])
        })

        test('2468 and 1234', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2468', '1234'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 3045512',
                'div: 2',
                ''
            ])
        })

        test('-6 and 5', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '-6', '5'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: -30',
                'div: -1',
                ''
            ])
        })

        test('0 and 10', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', '10'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 0',
                ''
            ])
        })

        test('10 and 0', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '10', '0'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'mul: 0',
                'div: 42',
                ''
            ])
        })

    })

})
