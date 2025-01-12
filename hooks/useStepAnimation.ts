// hooks/useStepAnimation.ts
'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useStepAnimation = (targetSelector: string) => {
  useEffect(() => {
    const steps = document.querySelectorAll(targetSelector)

    if (steps.length > 0) {
      // GSAPタイムラインを作成
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: steps[0], // 最初の要素をトリガーとして設定
          start: 'top 150%', // トリガーポイントを調整
          end: 'bottom 50%',
          markers: true, // デバッグ用マーカー
          toggleActions: 'play none none none', // アニメーションの動作設定
          once: true, // 一度だけ実行
        },
      })

      // タイムラインに各ステップを追加
      steps.forEach((step, index) => {
        tl.fromTo(
          step,
          {
            opacity: 0,
            y: 150, // 初期位置: 下に150pxオフセット
          },
          {
            opacity: 1,
            y: 0, // 元の位置に移動
            duration: 1, // 各要素のアニメーション時間
            ease: 'power3.out',
          },
          index * 0.7// 0.5秒ずつ遅延を設定
        )
      })
    }

    // ScrollTriggerのクリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [targetSelector])
}

export default useStepAnimation
