import { Formik, Field } from "formik"
import "./App.css"
import UniOptions from "./components/UniOptions.js"
function App() {
    return (
        <Formik
            initialValues={{
                universite: "0",
                kulup_adi: "kulup_adi",
                soru1: "soru1",
                soru2: "sec",
                soru4: "",
                soru5: "",
                soru6 : "soru6",
                soru7 : "soru7",
                soru8 : "soru8",
                soru9 : "soru9",
                soru10 : "soru10",
                soru11 : "666",
                soru12 : "777",
                soru13 : "soru13",
                soru14 : "soru14",
                soru15 : "soru15",
                soru16 : "soru16",
                soru17 : "soru17",
                soru18 : "soru18",
                soru19 : "soru19",
                ad_soyad : "Ali Kaan",
                phone_num : "5050554879",
                email : "xxx@hotmil.com"


            }}
            onSubmit={(values) => {
                console.log(values)
            }}>

            {({ values }) => {

                return (

                    <div className="container-flush p-5">
                        <div>{JSON.stringify(values)}</div>
                        <div id="main" className="container bg-light rounded px-5">
                            <div className="text-center p-2">
                                <img id="logo" alt="logo" className="img-fluid w-25 p-2" src="./logo.d6990a66.png"></img>
                            </div>
                            <div id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <form action="" onSubmit={}>
                                    <div className="row">
                                        <h4 className="mt-5">Etkinlik Bilgi Formu</h4>
                                        <div className="form-floating col-lg-6 p-1">

                                            <Field as="select" className="form-select" name="universite" id="universite" required >
                                                <option value="-1" disabled>Seçiniz </option>
                                                <UniOptions />
                                                <option value="diger">Diğer </option>
                                            </Field>
                                            <label htmlFor="universite" >Üniversite Seçiniz</label>

                                        </div>
                                        <div className="form-floating mb-3 col p-1">
                                            <Field className="form-control" name="kulup_adi" id="kulup_adi" type="text" placeholder="." required />
                                            <label htmlFor="kulupAdi">Kulüp Adı</label>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h4 className="mt-5">Etkinlik Bilgileri</h4>
                                        <div className="form-floating mb-3 p-1">
                                            <Field className="form-control" name="soru1" id="soru1" type="text" placeholder="." required />
                                            <label htmlFor="soru1">Etkinlik Adı</label>
                                        </div>
                                        <span className="m-0 p-0 row">
                                            <div className="form-floating p-1">

                                                <Field as="select" className="form-select" name="soru2" id="soru2" required >
                                                    <option value="sec" disabled>Seçiniz</option>
                                                    <option value="tarih">Tarih seç</option>
                                                    <option value="aralik">Aralık seç</option>
                                                    <option value="belli_degil">Belli Değil</option>
                                                </Field>
                                                <label htmlFor="soru2" >Tarih Seçiniz</label>

                                            </div>

                                            <div className="form-floating mb-3 col-lg-6 p-1" >
                                                <Field className="form-control" name="soru4" id="soru4" type="date" placeholder="." />
                                                <label htmlFor="soru4">Başlangıç tarihi</label>
                                            </div>
                                            <div className={"form-floating mb-3 col p-1"}>
                                                <Field className="form-control" name="soru5" id="soru5" type="date" placeholder="Kulüp Adı" />
                                                <label htmlFor="soru5">Bitiş tarihi</label>
                                            </div>


                                        </span>
                                        <div className="form mb-3 mt-3 col p-1">
                                            <label htmlFor="soru6">Etkinlik içeriği</label>
                                            <Field as="textarea" className="form-control" name="soru6" id="soru6" maxLength="1000" placeholder="Etkinliğin amacı detaylı bir şekilde anlatılmalı ve şirketten beklenen sunum içeriği net bir şekilde belirtilmelidir." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru7">Katılım türleri</label>
                                            <Field as="textarea" className="form-control" name="soru7" id="soru7" maxLength="1000" placeholder="Sunum, vaka çalışması, stant, mülakat simülasyonu vb. tüm katılım türleri belirtilmelidir" required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru8">Katılım şartları</label>
                                            <Field as="textarea" className="form-control" name="soru8" id="soru8" maxLength="1000" placeholder="Tüm sponsorluk çeşitlerinin adları ve ücretleri yazılmalıdır. Stant ile katılım gösteriliyorsa m2 ve alan detaylarını belirtilmelidir. Örneğin:  Ana Sponsorluk: 20.000₺" required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru9">Etkinliğe Katılması Beklenen Konuşmacı Seviyesi</label>
                                            <Field className="form-control" name="soru9" id="soru9" placeholder="Genel müdür, insan kaynakları, direktör, müdür, satış ekipleri vb. beklenen katılımcı seviyesi yazılmalıdır." required />
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru10">Katılımcı Profili</label>
                                            <Field className="form-control" name="soru10" id="soru10" placeholder="x Üniversitesi, x Bölümü, 2. ve 3. sınıf öğrenciler şeklinde yazılmalıdır." required />
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru11">Geçtiğimiz Yıl Etkinliğe Katılan Öğrenci Sayısı</label>
                                            <Field className="form-control" name="soru11" id="soru11" type="number" required />
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru12">Bu Yıl Etkinliğe Beklenilen Katılımcı Sayısı</label>
                                            <Field className="form-control" name="soru12" id="soru12" type="number" required />
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru13">Etkinliğe Geçen Sene Katılan Şirketler</label>
                                            <Field as="textarea" className="form-control" name="soru13" id="soru13" maxLength="1000" placeholder="Bir önceki sene katılım gösteren şirketler yazılmalıdır, varsa sponsorluk türleri belirtilmelidir.&NewLine;*Sadece katılım gösteren şirketler yazılmalıdır, tanıtım, iletişim vb. sponsorlukları belirtmeyiniz.." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru14">Etkinliğe Katılımı Planlanan Şirket Sayısı</label>
                                            <Field as="textarea" className="form-control" name="soru14" id="soru14" maxLength="1000" placeholder="Sunum, stant, vaka çalışması vb. katılım türlerinde kaç şirketin yer alması planlandığı sayıyla belirtilmelidir.&NewLine;Örneğin: sunum: 8 şirket, vaka analizi: 3 şirket)" required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru15">Etkinliğe Katılımı Kesinleşen Şirketler ve Sponsorluk Türleri</label>
                                            <Field as="textarea" className="form-control" name="soru15" id="soru15" maxLength="1000" placeholder="Sadece katılımı kesinleşen şirketler sponsorlukları birlikte yazılmalıdır.&NewLine;Örneğin:  A Şirketi (Ana Sponsor), C Şirketi (Katılımcı)&NewLine;*Henüz belli değil ise Henüz belli değil yazınız." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru16">Etkinliğe Katılımı Kesinleşen Konuşmacılar</label>
                                            <Field as="textarea" className="form-control" name="soru16" id="soru16" maxLength="1000" placeholder="Konuşmacı ismi ve title olarak yazılmalıdır.&NewLine;Örneğin: Abc  - Satış Müdürü&NewLine;*Henüz belli değil ise Henüz belli değil yazınız." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru17">Etkinlik Nerede Gerçekleşecek</label>
                                            <Field as="textarea" className="form-control" name="soru17" id="soru17" maxLength="1000" placeholder="Online platformda gerçekleşecekse konuşmacının katılacağı platformun adı ve öğrencilerin izleyeceği platform belirtilmelidir.&NewLine;&NewLine;Fiziksel olarak gerçekleşecekse konuşmacının sahne alacağı salonun-kampüsün adıı ve adresi belirtilmelidir.&NewLine;&NewLine;Hibrit gerçekleşecekse ayrıca belirtmenizi rica ederiz." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru18">Etkinliğe Sadece Sunum ile Katılım Durumunda Talep Edilen İndirimli Bütçe</label>
                                            <Field as="textarea" className="form-control" name="soru18" id="soru18" maxLength="1000" placeholder="Sadece sunum ile katılım durumunda talep ettiğiniz indirimli bütçe yazılmalıdır. Ücret talep edilmiyorsa ücretsiz olduğu belirtilmelidir." required></Field>
                                        </div>
                                        <div className="form mb-3 col p-1">
                                            <label htmlFor="soru19">Kategoriye Göre Sponsor Bütçeleri</label>
                                            <Field as="textarea" className="form-control" name="soru19" id="soru19" maxLength="1000" placeholder="Varsa sponsorluk türleri, hakları ve bütçeleri yazılmalıdır eğer yoksa ücretsiz olduğu belirtilmelidir." required></Field>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mt-5">Etkinlik Koordinatörü</h4>
                                        <div className="form-floating mb-3 p-1">
                                            <Field className="form-control" name="ad_soyad" id="ad_soyad" type="text" placeholder="." required />
                                            <label htmlFor="ad_soyad">Ad Soyad</label>
                                        </div>
                                        <span className="m-0 p-0 row">
                                            <div className="form mb-3 col-lg-6 p-1">
                                                <label htmlFor="phone_num"> Telefon</label>
                                                <Field className="form-control" name="phone_num" id="phone_num" type="text" placeholder="(5xx) xxx xx xx" required />
                                            </div>
                                            <div className="form mb-3 col p-1">
                                                <label htmlFor="email"> Mail</label>
                                                <Field className="form-control" name="email" id="email" type="email" placeholder="example@mail.com" required />
                                            </div>
                                        </span>
                                    </div>

                                    <button className="btn btn-primary btn-lg mb-3" id="submitButton" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }}

        </Formik>
    );
}

export default App;
