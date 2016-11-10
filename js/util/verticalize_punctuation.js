'use strict';

const scriptDetection = require('./script_detection');

module.exports = function verticalizePunctuation(input) {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const nextCharCode = input.charCodeAt(i + 1) || null;
        const prevCharCode = input.charCodeAt(i - 1) || null;

        const canReplacePunctuation = (
            (!nextCharCode || scriptDetection.charAllowsVerticalWritingMode(nextCharCode, true)) &&
            (!prevCharCode || scriptDetection.charAllowsVerticalWritingMode(prevCharCode, true))
        );

        if (canReplacePunctuation && module.exports.lookup[input[i]]) {
            output += module.exports.lookup[input[i]];
        } else {
            output += input[i];
        }
    }

    return output;
};

module.exports.lookup = {
    '!': '！',
    '#': '＃',
    '$': '＄',
    '%': '％',
    '&': '＆',
    '(': '︵',
    ')': '︶',
    '*': '＊',
    '+': '＋',
    ',': '，',
    '-': '︲',
    '.': '・',
    '/': '／',
    ':': '：',
    ';': '；',
    '<': '︿',
    '=': '＝',
    '>': '﹀',
    '?': '？',
    '@': '＠',
    '[': '﹇',
    '\\': '＼',
    ']': '﹈',
    '^': '＾',
    '_': '︳',
    '`': '｀',
    '{': '︷',
    '|': '―',
    '}': '︸',
    '~': '～',
    '¢': '￠',
    '£': '￡',
    '¥': '￥',
    '¦': '￤',
    '¬': '￢',
    '¯': '￣',
    '–': '︲',
    '—': '︱',
    '‘': '﹃',
    '’': '﹄',
    '“': '﹁',
    '”': '﹂',
    '₩': '￦',
    '。': '︒',
    '〈': '︿',
    '〉': '﹀',
    '《': '︽',
    '》': '︾',
    '「': '﹁',
    '」': '﹂',
    '『': '﹃',
    '』': '﹄',
    '【': '︻',
    '】': '︼',
    '〔': '︹',
    '〕': '︺',
    '〘': '︹',
    '〙': '︺',
    '（': '︵',
    '）': '︶',
    '－': '︲',
    '．': '・',
    '＜': '︿',
    '＞': '﹀',
    '［': '﹇',
    '］': '﹈',
    '＿': '︳',
    '｛': '︷',
    '｜': '―',
    '｝': '︸',
    '｟': '︵',
    '｠': '︶',
    '｡': '︒',
    '｢': '﹁',
    '｣': '﹂'
};
