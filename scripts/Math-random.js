
/**
 * �������λ��min~max֮�������������min��max����
 * �����һ�������������֣������ս������0��
 * ��ִ�в���֮ǰ�����������������бȽϣ��ϴ��ֵ��Ϊmax����С��ֵ��Ϊmin��
 * @param  {Number} min ��Сֵ
 * @param  {Number} max ���ֵ
 * @return {Number}
 */
function random (min, max) {
	
    if(isNaN(min) || isNaN(max)) return 0;
    if(min > max){
        var exchange = min;
        min = max;
        max = exchange;
    }
    return Math.round(Math.random()*(max - min) + min);
}