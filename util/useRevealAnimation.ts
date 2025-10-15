"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export function useRevealAnimation() {
	useEffect(() => {
		// Ensure GSAP and ScrollTrigger are loaded
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger)

			// Delay to ensure DOM is fully loaded
			const timer = setTimeout(() => {
				// Query select all elements with class "reveal"
				const revealContainers = document.querySelectorAll(".reveal")

				// Apply animations to each container
				revealContainers.forEach((container) => {
					// Find the image inside the container
					const image = container.querySelector("img")

					if (image) {
						// Create timeline with ScrollTrigger
						const tl = gsap.timeline({
							scrollTrigger: {
								trigger: container,
								start: 'top 80%',
								toggleActions: "play none none reverse",
							},
						})

						// Set initial state
						gsap.set(container, { autoAlpha: 0 })
						gsap.set(image, { scale: 1.3 })

						// Animate container from left
						tl.to(container, {
							autoAlpha: 1,
							xPercent: 0,
							duration: 1.5,
							ease: "power2.out",
						})

						// Animate image from right with scale
						tl.to(
							image,
							{
								xPercent: 0,
								scale: 1,
								duration: 1.5,
								ease: "power2.out",
							},
							"-=1.5"
						)
					}
				})
			}, 100)

			// Cleanup function
			return () => {
				clearTimeout(timer)
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
			}
		}
	}, []) // Empty dependency array means this runs once on mount
}

