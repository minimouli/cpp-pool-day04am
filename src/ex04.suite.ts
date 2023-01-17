/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GCC, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 4', () => {

    let gcc: GCC

    beforeAll(() => {
        gcc = new GCC([
            Path.fromProject('./ex04/print.c'),
            Path.fromMoulinette('./res/ex04/do_action_main.c')
        ])
    })

    suite('Normal', () => {

        test('Short', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', 'Oui, ma gatee'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'Oui, ma gatee',
                ''
            ])
        })

        test('Medium', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', 'RS4 gris nardo, bien sur qu ils m ont rate'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'RS4 gris nardo, bien sur qu ils m ont rate',
                ''
            ])
        })

        test('Large', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', 'Soleil dans la bulle, sur le Prado, Shifter pro. Contre-sens (ah), ma cherie, tu es a contre-sens'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'Soleil dans la bulle, sur le Prado, Shifter pro. Contre-sens (ah), ma cherie, tu es a contre-sens',
                ''
            ])
        })

        test('Empty', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '0', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '', ''
            ])
        })

    })

    suite('Reverse', () => {

        test('Short', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', 'Oui, ma gatee'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'eetag am ,iuO',
                ''
            ])
        })

        test('Medium', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', 'RS4 gris nardo, bien sur qu ils m ont rate'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'etar tno m sli uq rus neib ,odran sirg 4SR',
                ''
            ])
        })

        test('Large', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', 'Soleil dans la bulle, sur le Prado, Shifter pro. Contre-sens (ah), ma cherie, tu es a contre-sens'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'snes-ertnoc a se ut ,eirehc am ,)ha( snes-ertnoC .orp retfihS ,odarP el rus ,ellub al snad lieloS',
                ''
            ])
        })

        test('Empty', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '1', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '', ''
            ])
        })

    })

    suite('Upper', () => {

        test('Short', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2', 'Oui, ma gatee'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'OUI, MA GATEE',
                ''
            ])
        })

        test('Medium', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2', 'RS4 gris nardo, bien sur qu ils m ont rate'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'RS4 GRIS NARDO, BIEN SUR QU ILS M ONT RATE',
                ''
            ])
        })

        test('Large', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2', 'Soleil dans la bulle, sur le Prado, Shifter pro. Contre-sens (ah), ma cherie, tu es a contre-sens'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                'SOLEIL DANS LA BULLE, SUR LE PRADO, SHIFTER PRO. CONTRE-SENS (AH), MA CHERIE, TU ES A CONTRE-SENS',
                ''
            ])
        })

        test('Empty', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '2', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '', ''
            ])
        })

    })

    suite('42', () => {

        test('Short', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '3', 'Oui, ma gatee'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '42', ''
            ])
        })

        test('Medium', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '3', 'RS4 gris nardo, bien sur qu ils m ont rate'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '42', ''
            ])
        })

        test('Large', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '3', 'Soleil dans la bulle, sur le Prado, Shifter pro. Contre-sens (ah), ma cherie, tu es a contre-sens'
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '42', ''
            ])
        })

        test('Empty', async () => {

            const executable = await gcc.execute()

            executable.setArguments([
                '3', ''
            ])
            await executable.execute()

            expect(executable).toExitWith(0)
            await expect(executable).toOutput([
                '42', ''
            ])
        })

    })

})
