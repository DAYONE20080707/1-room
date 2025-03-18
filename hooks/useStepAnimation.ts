// hooks/useStepAnimation.ts
'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useStepAnimation = (targetSelector: string, dynamicContentSelector?: string) => {
  useEffect(() => {
    const steps = document.querySelectorAll(targetSelector)
    const dynamicContent = dynamicContentSelector
      ? document.querySelector(dynamicContentSelector)
      : null

    if (steps.length > 0) {
      // GSAPタイムラインを作成
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: steps[0],
          start: 'top 80%',
          end: 'bottom 50%',
          markers: false,
          toggleActions: 'play none none none',
          once: true,
        },
      })

      // 各ステップをタイムラインに追加
      steps.forEach((step, index) => {
        tl.fromTo(
          step,
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          index * 0.3 // 各要素を0.3秒ずつ遅延
        )
      })

      // 動的コンテンツの監視
      if (dynamicContent) {
        const observer = new MutationObserver(() => {
          ScrollTrigger.refresh() // 動的コンテンツ変更後にScrollTriggerを更新
        })

        observer.observe(dynamicContent, { childList: true, subtree: true })

        // クリーンアップ
        return () => {
          observer.disconnect()
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
      }

      // ScrollTriggerのクリーンアップ
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [targetSelector, dynamicContentSelector])
}

export default useStepAnimation
