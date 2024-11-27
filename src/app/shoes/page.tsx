import React from 'react'

const Shoes = () => {
  const ShoesData = [
    { id: 1, name: 'Nike Mans', price: 2000, description: 'AIR+JORDAN+1+LOW+SE(Mans)', image: '/mans1.png' },
    { id: 2, name: 'Nike Mans', price: 4100, description: 'ZOOM+FLY+6(Mans running shoes)', image: '/mans2.png' },
    { id: 3, name: 'Nike Mans', price: 3000, description: 'NIKE+MOTIVA (Mans walking shoes)', image: '/mans3.png' },
    { id: 4, name: 'Nike Womens', price: 2500, description: 'W+NIKE+AIR+MAX+1(women)', image: '/womens1.png' },
    { id: 5, name: 'Nike Kids', price: 3500, description: 'BLAZER+LOW+77+(PS)(kids shoes)', image: '/kids shoes.png' },
    { id: 6, name: 'Nike Womens', price: 4000, description: 'W+NKE+REACTX+INFINITY+RN+4+GTX', image: '/womens2.png' }
  ]

  return (
    <div className="bg-blue-900 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ShoesData.map((shoes) => (
            <div key={shoes.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={shoes.image} alt={shoes.name} className="w-full h-30 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-900">{shoes.name}</h3>
                <p className="text-gray-700">{shoes.description}</p>
                <div className="text-lg font-semibold text-blue-600">${shoes.price}</div>
                <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-500 transition duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shoes
