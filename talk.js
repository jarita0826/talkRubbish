function createDiscourse(role) {
    // 1.讀取使用者選取哪個選項
    // let role = '工程師'
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']

    //2.隨機選出phrase
    let newphrase = phrase[Math.floor(Math.random() * phrase.length)]

    //3.隨機選出task
    let newtask = ''
    if (role === '工程師') {
        newtask = task.engineer[Math.floor(Math.random() * task.engineer.length)]

    }
    if (role === '設計師') {
        newtask = task.designer[Math.floor(Math.random() * task.designer.length)]
    }
    if (role === '創業家') {
        newtask = task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)]
    }
    // (假如沒按到選項則秀出請勾選角色)
    if (role === undefined) {
        return '請點選要和誰講幹話'

    }

    let words = `身為一個${role},${newtask},${newphrase}吧!`

    //4.把前三點組合起來
    return words

    //5.渲染至textarea框框裡

}

module.exports = createDiscourse