/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GCC, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 3', () => {

    let gcc: GCC

    beforeAll(() => {
        gcc = new GCC([
            Path.fromProject('./ex03/array_1d_to_2d.c'),
            Path.fromMoulinette('./res/ex03/array_1d_to_2d_main.c')
        ])
    })

    test('Small 3x5', async () => {

        const array = [
            '24', '91', '32',
            '23', '66', '51',
            '27', '64', '43',
            '40', '79', '95',
            '38', '80', '12'
        ]

        const executable = await gcc.execute()

        executable.setArguments([
            array.length.toString(), ...array, '3', '5'
        ])
        await executable.execute()

        expect(executable).toExitWith(0)
        await expect(executable).toOutput([
            '24, 91, 32',
            '23, 66, 51',
            '27, 64, 43',
            '40, 79, 95',
            '38, 80, 12',
            ''
        ])
    })

    test('Small 5x3', async () => {

        const array = [
            '24', '91', '32',
            '23', '66', '51',
            '27', '64', '43',
            '40', '79', '95',
            '38', '80', '12'
        ]

        const executable = await gcc.execute()

        executable.setArguments([
            array.length.toString(), ...array, '5', '3'
        ])
        await executable.execute()

        expect(executable).toExitWith(0)
        await expect(executable).toOutput([
            '24, 91, 32, 23, 66',
            '51, 27, 64, 43, 40',
            '79, 95, 38, 80, 12',
            ''
        ])
    })

    test('Line', async () => {

        const array = [
            '24', '91', '32',
            '23', '66', '51',
            '27', '64', '43',
            '40', '79', '95',
            '38', '80', '12'
        ]

        const executable = await gcc.execute()

        executable.setArguments([
            array.length.toString(), ...array, '15', '1'
        ])
        await executable.execute()

        expect(executable).toExitWith(0)
        await expect(executable).toOutput([
            '24, 91, 32, 23, 66, 51, 27, 64, 43, 40, 79, 95, 38, 80, 12',
            ''
        ])
    })

    test('Big 20x20', async () => {

        const array = [
            '67', '30', '18', '99', '44', '94', '31', '9', '24', '87',
            '92', '40', '44', '12', '5', '61', '6', '60', '7', '84',
            '74', '74', '82', '82', '38', '44', '46', '86', '24', '30',
            '38', '8', '82', '27', '47', '93', '20', '5', '88', '39',
            '79', '9', '44', '73', '66', '80', '6', '79', '61', '19',
            '57', '96', '13', '3', '60', '85', '57', '86', '87', '58',
            '54', '20', '59', '42', '18', '10', '68', '59', '75', '47',
            '50', '12', '30', '79', '34', '90', '6', '42', '12', '66',
            '96', '53', '18', '17', '76', '52', '32', '88', '75', '18',
            '45', '68', '38', '63', '31', '42', '48', '87', '16', '41',
            '33', '24', '77', '21', '87', '30', '15', '79', '66', '16',
            '60', '34', '92', '6', '45', '76', '96', '55', '3', '97',
            '70', '6', '74', '37', '5', '50', '38', '21', '60', '39',
            '72', '33', '35', '44', '31', '66', '41', '60', '40', '4',
            '88', '17', '8', '33', '33', '38', '48', '73', '30', '50',
            '20', '11', '72', '66', '85', '22', '81', '67', '79', '15',
            '68', '86', '37', '83', '34', '20', '62', '86', '86', '68',
            '76', '47', '43', '49', '2', '42', '86', '34', '37', '13',
            '3', '96', '45', '71', '45', '74', '91', '89', '89', '70',
            '31', '95', '55', '83', '86', '85', '43', '92', '0', '62',
            '38', '12', '69', '20', '42', '77', '22', '75', '45', '5',
            '96', '28', '44', '69', '17', '76', '82', '38', '95', '5',
            '60', '37', '46', '34', '28', '14', '50', '23', '6', '64',
            '38', '19', '28', '64', '96', '9', '26', '67', '29', '56',
            '62', '66', '44', '2', '49', '71', '11', '61', '76', '23',
            '98', '88', '33', '40', '30', '35', '86', '80', '4', '14',
            '77', '43', '37', '86', '100', '92', '95', '17', '78', '0',
            '50', '42', '23', '85', '54', '91', '69', '13', '79', '72',
            '91', '59', '82', '9', '43', '58', '60', '10', '99', '5',
            '86', '37', '98', '92', '95', '91', '46', '89', '64', '11',
            '57', '36', '5', '9', '23', '41', '11', '43', '91', '0',
            '11', '74', '6', '95', '36', '84', '69', '57', '7', '100',
            '11', '43', '25', '45', '8', '87', '26', '35', '75', '75',
            '2', '79', '5', '42', '33', '88', '52', '11', '39', '71',
            '64', '23', '17', '80', '52', '45', '62', '49', '80', '62',
            '70', '95', '45', '98', '65', '92', '92', '26', '89', '55',
            '38', '91', '60', '16', '81', '25', '27', '16', '14', '100',
            '33', '52', '15', '5', '61', '29', '38', '3', '6', '82',
            '45', '29', '73', '60', '85', '24', '80', '42', '46', '45',
            '51', '98', '90', '58', '40', '22', '15', '53', '16', '19'
        ]
        const result = Array.from({ length: 20 }, (_, index) => array.slice(20 * index, 20 * (index + 1)))
            .map((line) => line.join(', '))

        const executable = await gcc.execute()

        executable.setArguments([
            array.length.toString(), ...array, '20', '20'
        ])
        await executable.execute()

        expect(executable).toExitWith(0)
        await expect(executable).toOutput([
            ...result, ''
        ])
    })

})
