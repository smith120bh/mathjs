import { createAnd } from '../../function/logical/and.js'
import { factory } from '../../utils/factory.js'
import { testCondition } from './utils/testCondition.js'
import { isBigNumber, isBoolean, isComplex, isNumber, isUnit } from '../../utils/is.js'

const name = 'and'
const dependencies = ['typed', 'matrix', 'zeros', 'add', 'equalScalar', 'not', 'concat']

export const createAndTransform = /* #__PURE__ */ factory(name, dependencies, ({ typed, matrix, equalScalar, zeros, not, concat }) => {
  const and = createAnd({ typed, matrix, equalScalar, zeros, not, concat })

  function andTransform (args, math, scope) {
    const condition1 = args[0].compile().evaluate(scope)
    if (isNumber(condition1) || isBoolean(condition1) || isBigNumber(condition1) || isComplex(condition1) || isUnit(condition1)) {
      if (!testCondition(condition1)) {
        return false
      }
    }
    const condition2 = args[1].compile().evaluate(scope)
    return and(condition1, condition2)
  }

  andTransform.rawArgs = true

  return andTransform
}, { isTransformFunction: true })
