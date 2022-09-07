

const Inputs = ({ values, handleChange, eventNum }) => {

    return (
        <div className='m-0 p-0'>

            <div className="">
                <h4 className="mt-5">{"Etkinlik Bilgileri " + eventNum}</h4>
                <div className="form-floating mb-3 p-1">
                    <input onChange={handleChange} className="form-control" name={"activity_name" + eventNum} id={"activity_name" + eventNum} type="text" placeholder="." required />
                    <label htmlFor={"activity_name" + eventNum}>Etkinlik Adı</label>
                </div>

                <span className="m-0 p-0 row">
                    <div className="form-floating p-1">
                        <input className='d-none' val></input>
                        <select onChange={handleChange} className="form-select" name={"date_type" + eventNum} id={"date_type" + eventNum} required defaultValue={"sec"}>
                            <option value="sec" disabled>Seçiniz</option>
                            <option value="tarih">Tarih seç</option>
                            <option value="aralik">Aralık seç</option>
                            <option value="belli_degil">Belli Değil</option>
                        </select>
                        <label htmlFor={"date_type" + eventNum} >Tarih Seçiniz</label>

                    </div>

                    {(values["date_type" + eventNum] == "sec" || values["date_type" + eventNum] == "belli_degil")
                        ? <></>
                        : <></>
                    }

                    {(values["date_type" + eventNum] == "tarih")
                        ? (<div className="form-floating mb-3 col p-1" >
                            <input onChange={handleChange} className="form-control" name={"activity_date" + eventNum} id={"activity_date" + eventNum} type="date" placeholder="." />
                            <label htmlFor={"activity_date" + eventNum}>Etkinlik Tarihi</label>
                        </div>)
                        : <></>
                    }
                    {(values["date_type" + eventNum] == "aralik")
                        ? (<>
                            <div className="form-floating mb-3 col-lg-6 p-1" >
                                <input onChange={handleChange} className="form-control" name={"activity_date_start" + eventNum} id={"activity_date_start" + eventNum} type="date" placeholder="." />
                                <label htmlFor={"activity_date_start" + eventNum}>Başlangıç tarihi</label>
                            </div>
                            <div className={"form-floating mb-3 col p-1"}>
                                <input onChange={handleChange} className="form-control" name={"activity_date_finish" + eventNum} id={"activity_date_finish" + eventNum} type="date" placeholder="Kulüp Adı" />
                                <label htmlFor={"activity_date_finish" + eventNum}>Bitiş tarihi</label>
                            </div>
                        </>)
                        : <></>
                    }




                </span>

                <div className="form mb-3 mt-3 col p-1">
                    <label htmlFor="soru6">Etkinlik içeriği</label>
                    <textarea onChange={handleChange} className="form-control" name={"activity_content" + eventNum} id={"activity_content" + eventNum} maxLength="1000" placeholder="Etkinliğin amacı detaylı bir şekilde anlatılmalı ve şirketten beklenen sunum içeriği net bir şekilde belirtilmelidir." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"accession_type" + eventNum}>Katılım türleri</label>
                    <textarea onChange={handleChange} className="form-control" name={"accession_type" + eventNum} id={"accession_type" + eventNum} maxLength="1000" placeholder="Sunum, vaka çalışması, stant, mülakat simülasyonu vb. tüm katılım türleri belirtilmelidir" required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"accession_terms" + eventNum}>Katılım şartları</label>
                    <textarea className="form-control" name={"accession_terms" + eventNum} id={"accession_terms" + eventNum} maxLength="1000" placeholder="Tüm sponsorluk çeşitlerinin adları ve ücretleri yazılmalıdır. Stant ile katılım gösteriliyorsa m2 ve alan detaylarını belirtilmelidir. Örneğin:  Ana Sponsorluk: 20.000₺" required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"talker_level" + eventNum}>Etkinliğe Katılması Beklenen Konuşmacı Seviyesi</label>
                    <input onChange={handleChange} className="form-control" name={"talker_level" + eventNum} id={"talker_level" + eventNum} placeholder="Genel müdür, insan kaynakları, direktör, müdür, satış ekipleri vb. beklenen katılımcı seviyesi yazılmalıdır." required />
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"accession_profile" + eventNum}>Katılımcı Profili</label>
                    <input onChange={handleChange} className="form-control" name={"accession_profile" + eventNum} id={"accession_profile" + eventNum} placeholder="x Üniversitesi, x Bölümü, 2. ve 3. sınıf öğrenciler şeklinde yazılmalıdır." required />
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"old_accession_count" + eventNum}>Geçtiğimiz Yıl Etkinliğe Katılan Öğrenci Sayısı</label>
                    <input onChange={handleChange} className="form-control" name={"old_accession_count" + eventNum} id={"old_accession_count" + eventNum} type="number" required />
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"now_accession_count" + eventNum}>Bu Yıl Etkinliğe Beklenilen Katılımcı Sayısı</label>
                    <input onChange={handleChange} className="form-control" name={"now_accession_count" + eventNum} id={"now_accession_count" + eventNum} type="number" required />
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"old_accession_company_count" + eventNum}>Etkinliğe Geçen Sene Katılan Şirketler</label>
                    <textarea onChange={handleChange} className="form-control" name={"old_accession_company_count" + eventNum} id={"old_accession_company_count" + eventNum} maxLength="1000" placeholder="Bir önceki sene katılım gösteren şirketler yazılmalıdır, varsa sponsorluk türleri belirtilmelidir.&NewLine;*Sadece katılım gösteren şirketler yazılmalıdır, tanıtım, iletişim vb. sponsorlukları belirtmeyiniz.." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"now_accession_company_count" + eventNum}>Etkinliğe Katılımı Planlanan Şirket Sayısı</label>
                    <textarea onChange={handleChange} className="form-control" name={"now_accession_company_count" + eventNum} id={"now_accession_company_count" + eventNum} maxLength="1000" placeholder="Sunum, stant, vaka çalışması vb. katılım türlerinde kaç şirketin yer alması planlandığı sayıyla belirtilmelidir.&NewLine;Örneğin: sunum: 8 şirket, vaka analizi: 3 şirket)" required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"sponsor_type" + eventNum}>Etkinliğe Katılımı Kesinleşen Şirketler ve Sponsorluk Türleri</label>
                    <textarea onChange={handleChange} className="form-control" name={"sponsor_type" + eventNum} id={"sponsor_type" + eventNum} maxLength="1000" placeholder="Sadece katılımı kesinleşen şirketler sponsorlukları birlikte yazılmalıdır.&NewLine;Örneğin:  A Şirketi (Ana Sponsor), C Şirketi (Katılımcı)&NewLine;*Henüz belli değil ise Henüz belli değil yazınız." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"talkers" + eventNum}>Etkinliğe Katılımı Kesinleşen Konuşmacılar</label>
                    <textarea onChange={handleChange} className="form-control" name={"talkers" + eventNum} id={"talkers" + eventNum} maxLength="1000" placeholder="Konuşmacı ismi ve title olarak yazılmalıdır.&NewLine;Örneğin: Abc  - Satış Müdürü&NewLine;*Henüz belli değil ise Henüz belli değil yazınız." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"activity_place" + eventNum}>Etkinlik Nerede Gerçekleşecek</label>
                    <textarea onChange={handleChange} className="form-control" name={"activity_place" + eventNum} id={"activity_place" + eventNum} maxLength="1000" placeholder="Online platformda gerçekleşecekse konuşmacının katılacağı platformun adı ve öğrencilerin izleyeceği platform belirtilmelidir.&NewLine;&NewLine;Fiziksel olarak gerçekleşecekse konuşmacının sahne alacağı salonun-kampüsün adıı ve adresi belirtilmelidir.&NewLine;&NewLine;Hibrit gerçekleşecekse ayrıca belirtmenizi rica ederiz." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"activity_budget" + eventNum}>Etkinliğe Sadece Sunum ile Katılım Durumunda Talep Edilen İndirimli Bütçe</label>
                    <textarea onChange={handleChange} className="form-control" name={"activity_budget" + eventNum} id={"activity_budget" + eventNum} maxLength="1000" placeholder="Sadece sunum ile katılım durumunda talep ettiğiniz indirimli bütçe yazılmalıdır. Ücret talep edilmiyorsa ücretsiz olduğu belirtilmelidir." required></textarea>
                </div>
                <div className="form mb-3 col p-1">
                    <label htmlFor={"activity_budget_category" + eventNum}>Kategoriye Göre Sponsor Bütçeleri</label>
                    <textarea onChange={handleChange} className="form-control" name={"activity_budget_category" + eventNum} id={"activity_budget_category" + eventNum} maxLength="1000" placeholder="Varsa sponsorluk türleri, hakları ve bütçeleri yazılmalıdır eğer yoksa ücretsiz olduğu belirtilmelidir." required></textarea>
                </div>
            </div>

            <div>
                <h5 className="mt-5">Etkinlik Koordinatörü</h5>
                <div className="form-floating mb-3 p-1">
                    <input onChange={handleChange} className="form-control" name={"name_surname" + eventNum} id={"name_surname" + eventNum} type="text" placeholder="." required />
                    <label htmlFor={"name_surname" + eventNum}>Ad Soyad</label>
                </div>
                <span className="m-0 p-0 row">
                    <div className="form mb-3 col-lg-6 p-1">
                        <label htmlFor={"phone" + eventNum}> Telefon</label>
                        <input onChange={handleChange} className="form-control" name={"phone" + eventNum} id={"phone" + eventNum} type="tel" maxLength="10" placeholder="(5xx) xxx xx xx" required />
                    </div>
                    <div className="form mb-3 col p-1">
                        <label htmlFor={"mail" + eventNum}> Mail</label>
                        <input onChange={handleChange} className="form-control" name={"mail" + eventNum} id={"mail" + eventNum} type="email" placeholder="example@mail.com" required />
                    </div>
                </span>
            </div>

        </div>
    );
};



export default Inputs;
