
// �޸� Number.prototype.toFixed()
// Number.prototype.toFixed() �ڲ��ǲ��ó˳�������ķ�ʽ������С��λ�ģ�����JS���������ȵ����⣬��ĳЩ��ֵ������µò�����ȷ�Ľ��
// �޸����⣺(321.775).toFixed(2) = 321.77
// ����֢�᣺321.775*100 = 32177.499999999996
// 
// ��ʵ�ֹ����У����ڿ��ǲ�ȫ�棬�������µ����⣨�����޸�����
// (162.70).toFixed(2) = 162.69 
// (51.11+93.6).toFixed(2) = 144.70
// 
// �޸���ʽ�����⸡����ʹ�ó˳����������ַ���ƴ�ӵķ�ʽ������ָ��С��λ
// ==========================================================================================================================
Number.prototype.toFixed = function(length) {

    length = Math.abs(length) || 0;

    var lessZero = this < 0,
        absNum = Math.abs(this),
        strNum = '' + absNum,
        start = strNum.indexOf('.'),
        times = Math.pow(10, length),
        lastNumIndex = start + length + 1,
        isNeedAdd = start !== -1 && strNum.substring(lastNumIndex, lastNumIndex + 1) >= 5,
        temp, intergerNum;

    // absNum������ָ��С��λ����ת��Ϊ����
    if(start !== -1) {
        absNum = strNum.substring(0, lastNumIndex);
        intergerNum = parseInt(absNum.replace('.', ''));
    }

    // �������룬ת��Ϊ�������м�1������С���ӷ���ɾ��ȶ�ʧ
    if(isNeedAdd) {
        temp = intergerNum + 1;
        temp = temp/times;
    }else{
        temp = absNum;
    }

    // ת��Ϊ�ַ���
    temp += '';

    var startIndex = temp.indexOf('.'),
        strNumBeforeDotted = temp.replace(/\.\d*$/, ''),
        strNumAfterDotted = startIndex === -1 ? '' : temp.substring(startIndex + 1),
        lenAterDotted = strNumAfterDotted.length;

    // ��ȫĩβ��0���㳤��
    for(var i = 0, e = length - lenAterDotted; i < e; i++) {
        strNumAfterDotted += '0';
    }

    // ���С��λ����������Ҫ��ȡ
    if(length < lenAterDotted) {
        strNumAfterDotted = strNumAfterDotted.substring(0, length);
    }

    // ƴ�ӽ��
    if(strNumAfterDotted !== '') {
        strNumAfterDotted = '.' + strNumAfterDotted;
    }
    return (lessZero ? '-' : '') + strNumBeforeDotted + strNumAfterDotted;
};