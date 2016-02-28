---
layout: default
---

<h1 id="function-reference-categorical">Function reference (categorical) <a href="#function-reference-categorical" title="Permalink">#</a></h1>

<h2 id="algebra">algebra <a href="#algebra" title="Permalink">#</a></h2>

- [lsolve(L, b)](lsolve.html)
- [lup(A)](lup.html)
- [lusolve(A, b)](lusolve.html)
- [slu(A, order, threshold)](slu.html)
- [usolve(U, b)](usolve.html)

<h2 id="arithmetic">arithmetic <a href="#arithmetic" title="Permalink">#</a></h2>

- [abs(x)](abs.html)
- [add(x, y)](add.html)
- [cbrt(x)](cbrt.html)
- [ceil(x)](ceil.html)
- [cube(x)](cube.html)
- [divide(x, y)](divide.html)
- [dotDivide(x, y)](dotDivide.html)
- [dotMultiply(x, y)](dotMultiply.html)
- [dotPow(x, y)](dotPow.html)
- [exp(x)](exp.html)
- [fix(x)](fix.html)
- [floor(x)](floor.html)
- [gcd(a, b)](gcd.html)
- [hypot(a, b, ...)](hypot.html)
- [lcm(a, b)](lcm.html)
- [log(x [, base])](log.html)
- [log10(x)](log10.html)
- [mod(x, y)](mod.html)
- [multiply(x, y)](multiply.html)
- [norm(x [, p])](norm.html)
- [nthRoot(a)](nthRoot.html)
- [pow(x, y)](pow.html)
- [round(x [, n])](round.html)
- [sign(x)](sign.html)
- [sqrt(x)](sqrt.html)
- [square(x)](square.html)
- [subtract(x, y)](subtract.html)
- [unaryMinus(x)](unaryMinus.html)
- [unaryPlus(x)](unaryPlus.html)
- [xgcd(a, b)](xgcd.html)

<h2 id="bitwise">bitwise <a href="#bitwise" title="Permalink">#</a></h2>

- [bitAnd(x, y)](bitAnd.html)
- [bitNot(x)](bitNot.html)
- [bitOr(x, y)](bitOr.html)
- [bitXor(x, y)](bitXor.html)
- [leftShift(x, y)](leftShift.html)
- [rightArithShift(x, y)](rightArithShift.html)
- [rightLogShift(x, y)](rightLogShift.html)

<h2 id="combinatorics">combinatorics <a href="#combinatorics" title="Permalink">#</a></h2>

- [bellNumbers(n)](bellNumbers.html)
- [catalan(n)](catalan.html)
- [composition(n, k)](composition.html)
- [stirlingS2(n, k)](stirlingS2.html)

<h2 id="complex">complex <a href="#complex" title="Permalink">#</a></h2>

- [arg(x)](arg.html)
- [conj(x)](conj.html)
- [im(x)](im.html)
- [re(x)](re.html)

<h2 id="construction">construction <a href="#construction" title="Permalink">#</a></h2>

- [bignumber(x)](bignumber.html)
- [boolean(x)](boolean.html)
- [chain(value)](chain.html)
- [complex(re, im)](complex.html)
- [fraction(numerator, denominator)](fraction.html)
- [index(range1, range2, ...)](index.html)
- [matrix(x)](matrix.html)
- [number(value)](number.html)
- [sparse(x)](sparse.html)
- [string(value)](string.html)
- [unit(x)](unit.html)

<h2 id="expression">expression <a href="#expression" title="Permalink">#</a></h2>

- [compile(expr)](compile.html)
- [eval(expr [, scope])](eval.html)
- [help(search)](help.html)
- [parse(expr [, scope])](parse.html)
- [parser()](parser.html)

<h2 id="geometry">geometry <a href="#geometry" title="Permalink">#</a></h2>

- [distance([x1, y1], [x2, y2])](distance.html)
- [intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)](intersect.html)

<h2 id="logical">logical <a href="#logical" title="Permalink">#</a></h2>

- [and(x, y)](and.html)
- [not(x)](not.html)
- [or(x, y)](or.html)
- [xor(x, y)](xor.html)

<h2 id="matrix">matrix <a href="#matrix" title="Permalink">#</a></h2>

- [concat(a, b, c, ... [, dim])](concat.html)
- [cross(x, y)](cross.html)
- [det(x)](det.html)
- [diag(X)](diag.html)
- [dot(x, y)](dot.html)
- [eye(n)](eye.html)
- [flatten(x)](flatten.html)
- [inv(x)](inv.html)
- [ones(m, n, p, ...)](ones.html)
- [range(start, end [, step])](range.html)
- [resize(x, size [, defaultValue])](resize.html)
- [size(x)](size.html)
- [squeeze(x)](squeeze.html)
- [subset(x, index [, replacement])](subset.html)
- [trace(x)](trace.html)
- [transpose(x)](transpose.html)
- [zeros(m, n, p, ...)](zeros.html)

<h2 id="probability">probability <a href="#probability" title="Permalink">#</a></h2>

- [combinations(n, k)](combinations.html)
- [factorial(n)](factorial.html)
- [gamma(n)](gamma.html)
- [kldivergence(x, y)](kldivergence.html)
- [multinomial(a)](multinomial.html)
- [permutations(n [, k])](permutations.html)
- [pickRandom(array)](pickRandom.html)
- [random([min, max])](random.html)
- [randomInt([min, max])](randomInt.html)

<h2 id="relational">relational <a href="#relational" title="Permalink">#</a></h2>

- [compare(x, y)](compare.html)
- [deepEqual(x, y)](deepEqual.html)
- [equal(x, y)](equal.html)
- [larger(x, y)](larger.html)
- [largerEq(x, y)](largerEq.html)
- [smaller(x, y)](smaller.html)
- [smallerEq(x, y)](smallerEq.html)
- [unequal(x, y)](unequal.html)

<h2 id="statistics">statistics <a href="#statistics" title="Permalink">#</a></h2>

- [max(a, b, c, ...)](max.html)
- [mean(a, b, c, ...)](mean.html)
- [median(a, b, c, ...)](median.html)
- [min(a, b, c, ...)](min.html)
- [mode(a, b, c, ...)](mode.html)
- [prod(a, b, c, ...)](prod.html)
- [quantileSeq(A, prob[, sorted])](quantileSeq.html)
- [std(a, b, c, ...)](std.html)
- [sum(a, b, c, ...)](sum.html)
- [var(a, b, c, ...)](var.html)

<h2 id="trigonometry">trigonometry <a href="#trigonometry" title="Permalink">#</a></h2>

- [acos(x)](acos.html)
- [acosh(x)](acosh.html)
- [acot(x)](acot.html)
- [acoth(x)](acoth.html)
- [acsc(x)](acsc.html)
- [acsch(x)](acsch.html)
- [asec(x)](asec.html)
- [asech(x)](asech.html)
- [asin(x)](asin.html)
- [asinh(x)](asinh.html)
- [atan(x)](atan.html)
- [atan2(y, x)](atan2.html)
- [atanh(x)](atanh.html)
- [cos(x)](cos.html)
- [cosh(x)](cosh.html)
- [cot(x)](cot.html)
- [coth(x)](coth.html)
- [csc(x)](csc.html)
- [csch(x)](csch.html)
- [sec(x)](sec.html)
- [sech(x)](sech.html)
- [sin(x)](sin.html)
- [sinh(x)](sinh.html)
- [tan(x)](tan.html)
- [tanh(x)](tanh.html)

<h2 id="units">units <a href="#units" title="Permalink">#</a></h2>

- [to(x, unit)](to.html)

<h2 id="utils">utils <a href="#utils" title="Permalink">#</a></h2>

- [clone(x)](clone.html)
- [filter(x, test)](filter.html)
- [forEach(x, callback)](forEach.html)
- [format(value [, precision])](format.html)
- [isInteger(x)](isInteger.html)
- [isNegative(x)](isNegative.html)
- [isNumeric(x)](isNumeric.html)
- [isPositive(x)](isPositive.html)
- [isZero(x)](isZero.html)
- [map(x, callback)](map.html)
- [partitionSelect(x, k)](partitionSelect.html)
- [print(template, values [, precision])](print.html)
- [sort(x)](sort.html)
- [typeof(x)](typeof.html)