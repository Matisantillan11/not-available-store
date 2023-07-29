import type { Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { particleConfig } from './particle-config'
import { useCallback } from 'react'

export const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	return (
		<div>
			<Particles
				style={{
					zIndex: -100000,
				}}
				id='tsparticles'
				init={particlesInit}
				options={particleConfig}
			/>
		</div>
	)
}
