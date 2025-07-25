import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'GrowMat Academy'
  const description = searchParams.get('description') || 'Raketový růst na Instagramu za 30 minut denně'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px 60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #10b981, #059669)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
              }}
            >
              📸
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  lineHeight: '1',
                }}
              >
                GrowMat
              </div>
              <div
                style={{
                  color: '#10b981',
                  fontSize: '24px',
                  fontWeight: '600',
                  lineHeight: '1',
                }}
              >
                Academy
              </div>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1.1',
              marginBottom: '30px',
              background: 'linear-gradient(90deg, #ffffff 0%, #10b981 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              color: '#d1d5db',
              fontSize: '28px',
              textAlign: 'center',
              lineHeight: '1.3',
              marginBottom: '50px',
              maxWidth: '800px',
            }}
          >
            {description}
          </div>

          {/* Key Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '15px 25px',
                borderRadius: '50px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div style={{ color: '#10b981', fontSize: '20px' }}>🚀</div>
              <div style={{ color: '#10b981', fontSize: '20px', fontWeight: '600' }}>
                BEZ reklam
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '15px 25px',
                borderRadius: '50px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div style={{ color: '#10b981', fontSize: '20px' }}>⏰</div>
              <div style={{ color: '#10b981', fontSize: '20px', fontWeight: '600' }}>
                30 min denně
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '15px 25px',
                borderRadius: '50px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div style={{ color: '#10b981', fontSize: '20px' }}>💰</div>
              <div style={{ color: '#10b981', fontSize: '20px', fontWeight: '600' }}>
                Etické prodeje
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            style={{
              background: 'linear-gradient(90deg, #10b981, #059669)',
              color: '#000000',
              fontSize: '24px',
              fontWeight: 'bold',
              padding: '20px 40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <span>Začni růst už dnes!</span>
            <div style={{ fontSize: '20px' }}>→</div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            background: 'rgba(16, 185, 129, 0.2)',
            padding: '10px 20px',
            borderRadius: '25px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          ✅ 30denní záruka
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
