import React, {useState} from 'react';

export default function ApologyPage(){
  const GIRL_NAME = 'Олеся';
  const YOUR_NAME = 'Александр';
  const [openMore, setOpenMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white p-6">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <header className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-pink-200 flex items-center justify-center text-2xl font-semibold text-white">❤</div>
          <div>
            <h1 className="text-xl font-bold">{GIRL_NAME}, мне очень стыдно</h1>
            <p className="text-sm text-gray-600">Небольшая страничка, чтобы честно извиниться</p>
          </div>
        </header>

        <main className="p-6 border-t border-gray-100">
          <section className="space-y-4">
            <p className="text-gray-800 leading-relaxed">
              {`Я понимаю, что причинил(а) тебе боль, и мне действительно жаль. Я хочу взять на себя ответственность за свои слова и поступки.`}
            </p>

            <div className="rounded-lg p-4 bg-pink-50">
              <p className="text-sm text-gray-700">Коротко о том, что произошло:</p>
              <ul className="mt-2 text-gray-700 list-disc list-inside text-sm">
                <li>Я ошибся и позволил эмоциям взять верх.</li>
                <li>Я не подумал о твоих чувствах в тот момент.</li>
                <li>Готов изменить своё поведение и работать над собой.</li>
              </ul>
            </div>

            <button
              onClick={() => setOpenMore(!openMore)}
              className="mt-2 w-full py-3 rounded-xl border border-pink-300 bg-white text-pink-600 font-medium shadow-sm hover:shadow-md transition"
            >
              {openMore ? 'Свернуть' : 'Хочу сказать больше'}
            </button>

            {openMore && (
              <div className="mt-4 p-4 bg-white/80 rounded-lg text-gray-800">
                <p className="leading-relaxed text-sm">{`Я понимаю, что извинения без действий мало что значат. Поэтому я честно обещаю:`}</p>
                <ol className="mt-2 list-decimal list-inside text-sm text-gray-700">
                  <li>Слушать тебя внимательнее и думать прежде чем говорить.</li>
                  <li>Больше времени уделять тому, что важно для нас обоих.</li>
                  <li>Если ты захочешь — мы напишем "договор" на небольшие обязательства, которые я выполню три дня подряд после твоего дня рождения.</li>
                </ol>
                <div className="mt-3">
                  <button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg bg-pink-600 text-white font-medium">Открыть обещание</button>
                </div>
              </div>
            )}
          </section>

          <hr className="my-6 border-gray-100" />

          <section className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">Если ты готова поговорить — я здесь и слушаю.</p>

            <div className="flex gap-3">
              <a href="tel:+79159363566" className="flex-1 text-center py-3 rounded-xl border border-gray-200">Позвонить</a>
              <a href="https://t.me/sh33sa" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl bg-pink-600 text-white">Написать сообщение</a>
            </div>
          </section>
        </main>

        <footer className="p-4 text-center text-xs text-gray-500">
          <p>С любовью, {YOUR_NAME} — {new Date().toLocaleDateString()}</p>
        </footer>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setShowModal(false)} />
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold">Моё обещание</h3>
            <p className="mt-2 text-sm text-gray-700">Я буду внимательнее, честнее и уважительнее. В любых спорах попытаюсь сначала понять тебя, а не защищаться.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
              <li>Каждое утро — одно доброе действие в твою сторону.</li>
              <li>Три дня подряд после твоего дня рождения — полное внимание, маленькие сюрпризы и поддержка.</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <button onClick={()=>{setShowModal(false); setAccepted(true);}} className="flex-1 py-2 rounded-xl bg-pink-600 text-white">Я принимаю это</button>
              <button onClick={()=>setShowModal(false)} className="flex-1 py-2 rounded-xl border">Закрыть</button>
            </div>
          </div>
        </div>
      )}

      {accepted && (
        <div className="fixed left-4 bottom-6 bg-white/95 px-4 py-2 rounded-full shadow-lg text-sm">Спасибо, что читаешь. ❤️</div>
      )}
    </div>
  );
}
