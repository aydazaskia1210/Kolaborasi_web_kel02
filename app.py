import tkinter as tk
from tkinter import ttk, messagebox

class SampahkuHartakuApp:
    def __init__(self, root):
        self.root = root
        self.root.title("♻ Sampahku Hartaku - Kelompok 11")
        self.root.geometry("900x650")
        self.root.configure(bg="#0f172a")  # Dark Eco Theme

        # Palet Warna (Eco Cyberpunk Dark & Green)
        self.colors = {
            "bg_dark": "#0f172a",
            "card_bg": "#1e293b",
            "primary_green": "#10b981",
            "accent_teal": "#06b6d4",
            "text_light": "#f8fafc",
            "text_sub": "#94a3b8",
            "border": "#334155"
        }

        self.setup_styles()
        self.create_header()
        self.create_tabs()

    def setup_styles(self):
        style = ttk.Style()
        style.theme_use('clam')

        # Notebook (Tab Navigation)
        style.configure("TNotebook", background=self.colors["bg_dark"], borderwidth=0)
        style.configure("TNotebook.Tab", background="#1e293b", foreground="#94a3b8",
                        padding=[15, 8], font=("Segoe UI", 10, "bold"), borderwidth=0)
        style.map("TNotebook.Tab",
                  background=[("selected", self.colors["primary_green"])],
                  foreground=[("selected", "#ffffff")])

    def create_header(self):
        header_frame = tk.Frame(self.root, bg=self.colors["card_bg"], height=70)
        header_frame.pack(fill="x", side="top")

        title_label = tk.Label(
            header_frame,
            text="♻ Sampahku Hartaku",
            font=("Segoe UI", 18, "bold"),
            fg=self.colors["primary_green"],
            bg=self.colors["card_bg"]
        )
        title_label.pack(side="left", padx=20, pady=15)

        subtitle_label = tk.Label(
            header_frame,
            text="Eco Innovation Project · SMKN Tengaran",
            font=("Segoe UI", 10, "italic"),
            fg=self.colors["text_sub"],
            bg=self.colors["card_bg"]
        )
        subtitle_label.pack(side="right", padx=20, pady=15)

    def create_tabs(self):
        notebook = ttk.Notebook(self.root)
        notebook.pack(fill="both", expand=True, padx=15, pady=15)

        # Tab 1: Beranda
        tab_home = tk.Frame(notebook, bg=self.colors["bg_dark"])
        notebook.add(tab_home, text=" Beranda ")
        self.build_home_tab(tab_home)

        # Tab 2: Produk & Karya
        tab_produk = tk.Frame(notebook, bg=self.colors["bg_dark"])
        notebook.add(tab_produk, text=" Produk Daur Ulang ")
        self.build_produk_tab(tab_produk)

        # Tab 3: Kalkulator SPLDV
        tab_math = tk.Frame(notebook, bg=self.colors["bg_dark"])
        notebook.add(tab_math, text=" Simulasi Matematika (SPLDV) ")
        self.build_math_tab(tab_math)

        # Tab 4: Anggota & Report
        tab_anggota = tk.Frame(notebook, bg=self.colors["bg_dark"])
        notebook.add(tab_anggota, text=" Anggota & Report ")
        self.build_anggota_tab(tab_anggota)

        # Tab 5: Kontak
        tab_kontak = tk.Frame(notebook, bg=self.colors["bg_dark"])
        notebook.add(tab_kontak, text=" Kontak ")
        self.build_kontak_tab(tab_kontak)

    # ------------------ TAB 1: BERANDA ------------------
    def build_home_tab(self, parent):
        container = tk.Frame(parent, bg=self.colors["card_bg"], bd=1, relief="solid")
        container.pack(fill="both", expand=True, padx=20, pady=20)

        tag = tk.Label(container, text="✦ ECO INNOVATION PROJECT", font=("Segoe UI", 9, "bold"),
                       fg=self.colors["accent_teal"], bg=self.colors["card_bg"])
        tag.pack(anchor="w", padx=30, pady=(30, 5))

        title = tk.Label(container, text="Sampah Hari Ini,\nKarya untuk Masa Depan.",
                         font=("Segoe UI", 22, "bold"), justify="left",
                         fg=self.colors["text_light"], bg=self.colors["card_bg"])
        title.pack(anchor="w", padx=30, pady=5)

        desc_text = (
            "Belajar mengolah sampah menjadi produk kreatif yang bermanfaat melalui prinsip 3R "
            "(Reduce, Reuse, Recycle).\nProyek ini menggabungkan pembelajaran lintas mata pelajaran "
            "dengan metode Waterfall.\n\n"
            "⚠️ Permasalahan Utama:\n"
            "Limbah motherboard dan hardisk mengandung logam berat seperti timbal dan merkuri. "
            "Selain merusak ekosistem, pembuangan hardisk sembarangan juga berisiko terhadap kebocoran data siber."
        )
        desc = tk.Label(container, text=desc_text, font=("Segoe UI", 11), justify="left",
                        fg=self.colors["text_sub"], bg=self.colors["card_bg"], wraplength=750)
        desc.pack(anchor="w", padx=30, pady=15)

        btn_quote = tk.Button(container, text="🌱 Tampilkan Pesan Motivasi Eco", font=("Segoe UI", 10, "bold"),
                              bg=self.colors["primary_green"], fg="white", activebackground="#059669",
                              activeforeground="white", relief="flat", padx=15, pady=8,
                              command=self.show_eco_quote)
        btn_quote.pack(anchor="w", padx=30, pady=10)

    def show_eco_quote(self):
        messagebox.showinfo(
            "Eco Quote",
            "\"Sampah hari ini adalah peluang untuk karya esok hari.\n\n"
            "Bumi tidak membutuhkan manusia sempurna, tetapi manusia yang peduli.\""
        )

    # ------------------ TAB 2: PRODUK ------------------
    def build_produk_tab(self, parent):
        lbl = tk.Label(parent, text="Daftar Produk Upcycling Kelompok 11", font=("Segoe UI", 14, "bold"),
                       fg=self.colors["text_light"], bg=self.colors["bg_dark"])
        lbl.pack(anchor="w", padx=20, pady=(15, 5))

        # Frame List & Detail (Side by Side)
        main_frame = tk.Frame(parent, bg=self.colors["bg_dark"])
        main_frame.pack(fill="both", expand=True, padx=20, pady=10)

        # Left Listbox
        self.produk_data = {
            "💡 Lampu Motherboard & HDD": "Lampu hias unik menggabungkan fungsi pencahayaan estetik, konsep cyberpunk futuristik, serta daur ulang sirkuit e-waste dan piringan hardisk bekas.",
            "👜 Tas Jeans": "Tas dari jeans bekas menggabungkan fungsi praktis, gaya kasual yang trendi, dan material denim yang kuat dan berkarakter.",
            "🎨 Lukisan Tutup Botol": "Kreasi lukisan berbahan tutup botol bekas dengan perpaduan warna unik dan tekstur khas untuk hiasan dinding.",
            "📦 Rak Mini Kardus": "Solusi penyimpanan estetik dan ringan memanfaatkan kardus tebal bekas yang dipola kokoh.",
            "🪴 Pot Bunga Galon": "Wadah tanaman dari galon plastik bekas yang dipotong dan dihias, tahan cuaca dan berkebun praktis.",
            "🕒 Jam Dinding Kardus": "Dekorasi penunjuk waktu dari kardus bekas yang ringan namun kokoh dan ramah kantong."
        }

        listbox_frame = tk.Frame(main_frame, bg=self.colors["card_bg"])
        listbox_frame.pack(side="left", fill="y", padx=(0, 15))

        self.listbox = tk.Listbox(listbox_frame, font=("Segoe UI", 11), bg=self.colors["card_bg"],
                                  fg=self.colors["text_light"], selectbackground=self.colors["primary_green"],
                                  width=25, height=12, bd=0, highlightthickness=0)
        for item in self.produk_data.keys():
            self.listbox.insert("end", item)
        self.listbox.pack(padx=10, pady=10)
        self.listbox.bind("<<ListboxSelect>>", self.on_product_select)

        # Right Detail Box
        detail_frame = tk.Frame(main_frame, bg=self.colors["card_bg"], bd=1, relief="solid")
        detail_frame.pack(side="right", fill="both", expand=True)

        self.lbl_detail_title = tk.Label(detail_frame, text="Pilih produk di samping", font=("Segoe UI", 13, "bold"),
                                         fg=self.colors["accent_teal"], bg=self.colors["card_bg"])
        self.lbl_detail_title.pack(anchor="w", padx=20, pady=(20, 10))

        self.lbl_detail_desc = tk.Label(detail_frame, text="", font=("Segoe UI", 10), justify="left",
                                        fg=self.colors["text_sub"], bg=self.colors["card_bg"], wraplength=450)
        self.lbl_detail_desc.pack(anchor="w", padx=20, pady=5)

    def on_product_select(self, event):
        selection = self.listbox.curselection()
        if selection:
            key = self.listbox.get(selection[0])
            self.lbl_detail_title.config(text=key)
            self.lbl_detail_desc.config(text=self.produk_data[key])

    # ------------------ TAB 3: MATEMATIKA (SPLDV) ------------------
    def build_math_tab(self, parent):
        container = tk.Frame(parent, bg=self.colors["card_bg"])
        container.pack(fill="both", expand=True, padx=20, pady=20)

        title = tk.Label(container, text="📐 Simulasi Penjualan Paket Bundling (SPLDV)",
                         font=("Segoe UI", 13, "bold"), fg=self.colors["primary_green"], bg=self.colors["card_bg"])
        title.pack(anchor="w", padx=20, pady=(15, 5))

        desc = tk.Label(container, text="Contoh Soal (Flayer Ararya):\nPaket 1: 1 Jam Dinding (x) + 2 Tempat Pensil (y) = Rp 140.000\nPaket 2: 1 Jam Dinding (x) + 1 Tempat Pensil (y) = Rp 90.000",
                        font=("Segoe UI", 10), justify="left", fg=self.colors["text_sub"], bg=self.colors["card_bg"])
        desc.pack(anchor="w", padx=20, pady=5)

        form_frame = tk.Frame(container, bg=self.colors["card_bg"])
        form_frame.pack(anchor="w", padx=20, pady=15)

        tk.Label(form_frame, text="Persamaan 1:  1x + ", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).grid(row=0, column=0)
        self.ent_y1 = tk.Entry(form_frame, width=5)
        self.ent_y1.insert(0, "2")
        self.ent_y1.grid(row=0, column=1)
        tk.Label(form_frame, text=" y = Rp ", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).grid(row=0, column=2)
        self.ent_p1 = tk.Entry(form_frame, width=10)
        self.ent_p1.insert(0, "140000")
        self.ent_p1.grid(row=0, column=3)

        tk.Label(form_frame, text="Persamaan 2:  1x + ", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).grid(row=1, column=0, pady=10)
        self.ent_y2 = tk.Entry(form_frame, width=5)
        self.ent_y2.insert(0, "1")
        self.ent_y2.grid(row=1, column=1, pady=10)
        tk.Label(form_frame, text=" y = Rp ", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).grid(row=1, column=2, pady=10)
        self.ent_p2 = tk.Entry(form_frame, width=10)
        self.ent_p2.insert(0, "90000")
        self.ent_p2.grid(row=1, column=3, pady=10)

        btn_calc = tk.Button(container, text="Hitung Harga Satuan", font=("Segoe UI", 10, "bold"),
                             bg=self.colors["accent_teal"], fg="white", relief="flat", padx=10, pady=5,
                             command=self.calculate_spldv)
        btn_calc.pack(anchor="w", padx=20, pady=5)

        self.lbl_math_result = tk.Label(container, text="Hasil akan tampil di sini.", font=("Segoe UI", 11, "bold"),
                                        fg=self.colors["primary_green"], bg=self.colors["card_bg"])
        self.lbl_math_result.pack(anchor="w", padx=20, pady=15)

    def calculate_spldv(self):
        try:
            y1 = float(self.ent_y1.get())
            p1 = float(self.ent_p1.get())
            y2 = float(self.ent_y2.get())
            p2 = float(self.ent_p2.get())

            # Eliminasi x: (1x + y1*y = p1) - (1x + y2*y = p2)
            y_val = (p1 - p2) / (y1 - y2)
            x_val = p1 - (y1 * y_val)

            self.lbl_math_result.config(
                text=f"✅ Hasil: Harga 1 Jam Dinding (x) = Rp {x_val:,.0f} | Harga 1 Tempat Pensil (y) = Rp {y_val:,.0f}"
            )
        except Exception:
            messagebox.showerror("Error", "Masukkan nilai angka yang valid!")

    # ------------------ TAB 4: ANGGOTA & REPORT ------------------
    def build_anggota_tab(self, parent):
        container = tk.Frame(parent, bg=self.colors["bg_dark"])
        container.pack(fill="both", expand=True, padx=20, pady=10)

        # Anggota Cards
        members_frame = tk.Frame(container, bg=self.colors["bg_dark"])
        members_frame.pack(fill="x", pady=10)

        members = [
            ("👩🏻‍🎓 Ararya Eka A.R", "X PPLG 2 (08)"),
            ("👨🏻‍🎓 Ayda Zaskia", "X PPLG 2 (10)"),
            ("👨🏻‍🎓 Muhammad Taufiq A", "X PPLG 2 (30)")
        ]

        for name, kelas in members:
            card = tk.Frame(members_frame, bg=self.colors["card_bg"], padx=15, pady=10, bd=1, relief="solid")
            card.pack(side="left", expand=True, fill="x", padx=5)
            tk.Label(card, text=name, font=("Segoe UI", 10, "bold"), fg=self.colors["text_light"], bg=self.colors["card_bg"]).pack()
            tk.Label(card, text=kelas, font=("Segoe UI", 9), fg=self.colors["text_sub"], bg=self.colors["card_bg"]).pack()

        # Observation Text
        tk.Label(container, text="🌍 English Observation Report Preview", font=("Segoe UI", 11, "bold"),
                 fg=self.colors["accent_teal"], bg=self.colors["bg_dark"]).pack(anchor="w", pady=(15, 5))

        txt_box = tk.Text(container, font=("Consolas", 9), bg=self.colors["card_bg"], fg=self.colors["text_light"],
                          height=10, bd=0, padx=10, pady=10)
        txt_box.pack(fill="both", expand=True)

        report_content = (
            "Observation Report - Laptop & Computer E-Waste:\n\n"
            "Computer waste refers to discarded or broken hardware categorized as electronic waste (e-waste).\n"
            "In Indonesia, this waste is classified as hazardous and toxic waste (B3) due to its heavy metal components.\n"
            "Circuit boards contain valuable metals like gold, but also toxic substances such as lead and cadmium.\n\n"
            "Solution:\n"
            "Creative upcycling transforms discarded motherboards and hard disks into futuristic desk lamps, "
            "preventing environmental pollution while creating commercial value."
        )
        txt_box.insert("1.0", report_content)
        txt_box.config(state="disabled")

    # ------------------ TAB 5: KONTAK ------------------
    def build_kontak_tab(self, parent):
        container = tk.Frame(parent, bg=self.colors["card_bg"])
        container.pack(fill="both", expand=True, padx=20, pady=20)

        title = tk.Label(container, text="Hubungi Kelompok 11", font=("Segoe UI", 13, "bold"),
                         fg=self.colors["primary_green"], bg=self.colors["card_bg"])
        title.pack(anchor="w", padx=20, pady=(15, 10))

        # Form Fields
        tk.Label(container, text="Nama Kamu:", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).pack(anchor="w", padx=20)
        self.ent_name = tk.Entry(container, width=40, font=("Segoe UI", 10))
        self.ent_name.pack(anchor="w", padx=20, pady=(0, 10))

        tk.Label(container, text="Email Kamu:", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).pack(anchor="w", padx=20)
        self.ent_email = tk.Entry(container, width=40, font=("Segoe UI", 10))
        self.ent_email.pack(anchor="w", padx=20, pady=(0, 10))

        tk.Label(container, text="Pesan Kamu:", font=("Segoe UI", 10), fg=self.colors["text_light"], bg=self.colors["card_bg"]).pack(anchor="w", padx=20)
        self.txt_pesan = tk.Text(container, width=50, height=4, font=("Segoe UI", 10))
        self.txt_pesan.pack(anchor="w", padx=20, pady=(0, 15))

        btn_send = tk.Button(container, text="✉ Kirim Pesan", font=("Segoe UI", 10, "bold"),
                             bg=self.colors["primary_green"], fg="white", relief="flat", padx=15, pady=8,
                             command=self.send_message)
        btn_send.pack(anchor="w", padx=20)

    def send_message(self):
        nama = self.ent_name.get().strip()
        email = self.ent_email.get().strip()
        pesan = self.txt_pesan.get("1.0", "end").strip()

        if not nama or not email or not pesan:
            messagebox.showwarning("Peringatan", "Semua kolom harus diisi!")
            return

        messagebox.showinfo(
            "Berhasil",
            f"Terima kasih, {nama}!\nPesan Anda telah berhasil dikirim ke Kelompok 11 SMKN Tengaran."
        )
        self.ent_name.delete(0, "end")
        self.ent_email.delete(0, "end")
        self.txt_pesan.delete("1.0", "end")

if __name__ == "__main__":
    root = tk.Tk()
    app = SampahkuHartakuApp(root)
    root.mainloop()