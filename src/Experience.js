import { Text, useGLTF, ContactShadows, Html } from "@react-three/drei";

export default function Experience()
{
    const laptop = useGLTF('./laptop.glb')

    return <>

        <color args={['#695b5b']} attach='background'/>

        <rectAreaLight width={5.5} height={3} intensity={0.65} color={'#ffffff'} position={[-0.5,1,1]}/>
        <primitive object={ laptop.scene } scale-x={0.1} scale-y={0.1} scale-z={0.1} position={[-1,-0.5,0]}>
            <Html transform wrapperClass="htmlScreen" distanceFactor={11} position={[1.3,9.95, -14]}>
                <iframe src='https://pdoeducation.org/'/>
            </Html>
        </primitive>
        <Text
                    font="./YoeYar-One.woff"
                    fontSize={ 0.8 }
                    position={ [ 1.3, 0.5, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                    ဖောင်တော်ဦး
            </Text>
        <ContactShadows position={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
}