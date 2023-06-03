import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      uangSisa: 0,
      persentaseUang: 0,
      pemasukanUang: 0,
      pengeluaranUang: 0,
      transaksiIN: 0,
      transaksiOUT: 0,
      summary: [
        {
          deskripsi: 'Menerima Gaji',
          tanggal: '1 Juli 2023',
          nominal: 1000000,
          category: 'IN'
        },
        {
          deskripsi: 'Makan nasi padang',
          tanggal: '3 Juli 2023',
          nominal: 20000,
          category: 'OUT'
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className='container py-5'>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='fe-bold'>Hallos</h1>
              <hr className='w-75 mx-auto' />
              <h4 className='fw-bold'>Rp. {this.state.uangSisa}</h4>
              <span>Sisa uang kamu tersisa 75% lagi</span>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-6'>
              <div className='card-wrapper p-4'>
                <div className='icon-wrap mb-2'>
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className='title'>Pemasukan</span>
                <h3 className='fw-bold'>Rp. {this.state.pemasukanUang}</h3>
                <div>
                  <span className='title'>50</span> <span className='title text-ungu'>Transaksi</span>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card-wrapper p-4'>
                <div className='icon-wrap mb-2'>
                  <i className="bi bi-cash"></i>
                </div>
                <span className='title'>Pengeluaran</span>
                <h3 className='fw-bold'>Rp. {this.state.pengeluaranUang},-</h3>
                <div>
                  <span className='title'>50</span> <span className='title text-ungu'>Transaksi</span>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-12 d-flex justify-content-between align-items-center '>
              <h2>Ringkasan transaksi</h2>
              <div className='wrapper-button d-flex'>
                <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan <i className="bi bi-plus-circle-fill"></i></button>
                <button className='button btn-pink px-3 py-2 me-2'>Pengeluaran <i className="bi bi-dash-circle"></i></button>

              </div>
            </div>
          </div>

          <div className='row mt-3 '>
            {this.state.summary.map((sum) => {
              return (
                <div className='mb-2 col-12 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={sum.category === 'IN' ? 'icon-wrap-in' : 'icon-wrap-out'}>
                      <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
                    </div>
                    <div className='transaction ms-3 d-flex flex-column'>
                      <h6>{sum.deskripsi}</h6>
                      <span className='title'>{sum.tanggal}</span>
                    </div>
                  </div>
                  <h5 className={sum.category === 'IN' ? 'money-in' : 'money-out'}>Rp. {sum.nominal}</h5>
                </div>
              );
            })}

          </div>
        </div>
      </>
    );
  }
}

export default App;
